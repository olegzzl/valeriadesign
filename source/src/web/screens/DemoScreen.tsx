import React, { useEffect, useRef, useState } from 'react';
import type { Lang, Project } from '../../types';
import type { UiDict } from '../../i18n';
import { UI } from '../../i18n';

type Mode = 'desktop' | 'mobile';

const LiveArea: React.FC<{ project: Project; mode: Mode; t: UiDict }> = ({ project, mode, t }) => {
  const target = mode === 'desktop' ? 1280 : 390;
  const embeddable = project.embeddable !== false;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [status, setStatus] = useState<'loading' | 'ok' | 'fail'>(embeddable ? 'loading' : 'fail');

  useEffect(() => {
    setStatus(embeddable ? 'loading' : 'fail');
    if (!embeddable) return;
    const timer = window.setTimeout(() => setStatus((s) => (s === 'loading' ? 'fail' : s)), 15000);
    return () => window.clearTimeout(timer);
  }, [project.id, mode, embeddable]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 0 && h > 0) setBox({ w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = box.w > 0 ? Math.min(1, box.w / target) : 1;
  const frameHeight = box.h > 0 ? Math.round(box.h / scale) : 0;
  const shot = mode === 'desktop' ? project.shots.pc : project.shots.mobile;

  return (
    <div className="live-wrap" ref={wrapRef}>
      <img className="live-poster" src={shot} alt="" aria-hidden="true" />
      {embeddable && (
        <iframe
          key={`${project.id}-${mode}`}
          className={status === 'ok' ? 'live-frame is-live' : 'live-frame'}
          src={project.url}
          title={`${project.title} — ${mode === 'desktop' ? t.desktop : t.mobile}`}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: target, height: frameHeight || undefined, transform: `scale(${scale})` }}
          onLoad={() => setStatus('ok')}
        />
      )}
      {status === 'loading' && <span className="live-badge">{t.loading}</span>}
      {status === 'fail' && (
        <div className="live-fallback-bar">
          <span>{t.fallbackNote}</span>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {t.goToSite} ↗
          </a>
        </div>
      )}
    </div>
  );
};

interface DemoProps {
  lang: Lang;
  project: Project;
  mode: Mode;
  onMode: (mode: Mode) => void;
  goBack: () => void;
  onRequest: (intent: 'order' | 'estimate' | 'contact', projectId?: string) => void;
}

export const DemoScreen: React.FC<DemoProps> = ({ lang, project, mode, onMode, goBack, onRequest }) => {
  const t = UI[lang];
  return (
    <main className="demo-screen">
      <header className="demo-toolbar">
        <button type="button" className="back-button" onClick={goBack} aria-label={t.backAria}>
          ‹
        </button>
        <div>
          <strong>{project.title}</strong>
          <span>{t.categories[project.category]}</span>
        </div>
      </header>

      <div className="demo-mode" role="group" aria-label={t.modeAria}>
        <button
          type="button"
          className={mode === 'desktop' ? 'selected' : ''}
          aria-pressed={mode === 'desktop'}
          onClick={() => onMode('desktop')}
        >
          {t.desktop}
        </button>
        <button
          type="button"
          className={mode === 'mobile' ? 'selected' : ''}
          aria-pressed={mode === 'mobile'}
          onClick={() => onMode('mobile')}
        >
          {t.mobile}
        </button>
      </div>

      <div className="demo-order-bar">
        <span>
          {t.price}
          <small>{t.priceNote}</small>
        </span>
        <button type="button" className="primary-cta" onClick={() => onRequest('order', project.id)}>
          {t.orderFromPreview} ↗
        </button>
      </div>

      <div className={`device-stage mode-${mode}`}>
        {mode === 'desktop' ? (
          <div className="laptop">
            <div className="laptop-body">
              <div className="laptop-screen">
                <LiveArea project={project} mode="desktop" t={t} />
              </div>
            </div>
            <div className="laptop-base" aria-hidden="true" />
          </div>
        ) : (
          <div className="phone">
            <div className="phone-body">
              <div className="phone-screen">
                <span className="phone-notch" aria-hidden="true" />
                <LiveArea project={project} mode="mobile" t={t} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="demo-actions">
        <a className="primary-cta" href={project.url} target="_blank" rel="noopener noreferrer">
          {t.goToSite} ↗
        </a>
        <button type="button" className="outline-cta" onClick={goBack}>
          {t.back}
        </button>
      </div>
    </main>
  );
};
