import React, { useMemo, useState } from 'react';
import type { CategoryKey, Lang, Project } from '../../types';
import { CATEGORY_ORDER, UI } from '../../i18n';
import { Pixel } from '../components/Pixel';
import { SocialLinks } from '../components/SocialLinks';
import { LangSwitch } from '../components/LangSwitch';

interface HomeProps {
  lang: Lang;
  projects: Project[];
  filter: 'all' | CategoryKey;
  setFilter: (filter: 'all' | CategoryKey) => void;
  onLang: (lang: Lang) => void;
  onOpen: (id: string, mode: 'desktop' | 'mobile') => void;
  onRequest: (intent: 'order' | 'estimate' | 'contact', projectId?: string) => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

export const HomeScreen: React.FC<HomeProps> = ({ lang, projects, filter, setFilter, onLang, onOpen, onRequest }) => {
  const t = UI[lang];
  const [menu, setMenu] = useState(false);
  const [howOpen, setHowOpen] = useState(false);
  const visible = useMemo(
    () => projects.filter((p) => filter === 'all' || p.category === filter),
    [projects, filter]
  );
  const total = pad(projects.length);
  const choose = (c: 'all' | CategoryKey) => {
    setFilter(c);
    setMenu(false);
  };

  return (
    <main className="home">
      <div className="expanded-home">
        <div className="page-inner">
          <header className="masthead">
            <div className="brand">
              <Pixel />
              <span>{t.brand}</span>
            </div>
            <div className="masthead-right">
              <SocialLinks t={t} className="masthead-social" />
              <LangSwitch lang={lang} onChange={onLang} ariaLabel={t.langAria} />
              <button
                className="menu-toggle"
                type="button"
                aria-label={menu ? t.menuClose : t.menuOpen}
                aria-expanded={menu}
                onClick={() => setMenu(!menu)}
              >
                <span>{menu ? t.closeWord : t.menuWord}</span>
                <span className={menu ? 'hamburger open' : 'hamburger'}>
                  <i />
                  <i />
                </span>
              </button>
            </div>
          </header>

          <div className="header-contacts">
            <div className="quick-actions">
              <button type="button" className="text-action" onClick={() => onRequest('contact')}>
                {t.ctaContact} ↗
              </button>
              <button type="button" className="text-action" onClick={() => onRequest('estimate')}>
                {t.ctaEstimate} ↗
              </button>
            </div>
            <SocialLinks t={t} className="strip-social" />
          </div>

          {menu && (
            <nav className="menu-panel" aria-label={t.navCatalog}>
              {CATEGORY_ORDER.map((c) => (
                <button type="button" key={c} onClick={() => choose(c)}>
                  {t.categories[c]}
                  <span>↗</span>
                </button>
              ))}
              <button type="button" onClick={() => choose('all')}>
                {t.all}
                <span>↗</span>
              </button>
              <button type="button" onClick={() => onRequest('order')}>
                {t.ctaOrder}
                <span>↗</span>
              </button>
              <button type="button" onClick={() => onRequest('contact')}>
                {t.ctaContact}
                <span>↗</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenu(false);
                  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {t.menuContacts}
                <span>↓</span>
              </button>
            </nav>
          )}

          <section className="hero">
            <div className="hero-heading">
              <h1>{t.heroTitle}</h1>
              <div className="dither" aria-hidden="true">
                {Array.from({ length: 36 }, (_, i) => (
                  <i key={i} style={{ opacity: (i % 7) / 7 }} />
                ))}
              </div>
            </div>
            <p>{t.heroSubtitle}</p>
            <div className="hero-conversion">
              <span className="hero-price">
                {t.price}
                <small>{t.priceNote}</small>
              </span>
              <div className="hero-actions">
                <button type="button" className="primary-cta" onClick={() => onRequest('order')}>
                  {t.ctaOrder} ↗
                </button>
                <button
                  type="button"
                  className={howOpen ? 'outline-cta how-toggle is-open' : 'outline-cta how-toggle'}
                  aria-expanded={howOpen}
                  aria-controls="how-it-works"
                  onClick={() => setHowOpen(!howOpen)}
                >
                  {t.howToggle}
                  <span className="chev" aria-hidden="true">
                    ⌄
                  </span>
                </button>
              </div>
            </div>

            <div className={howOpen ? 'how-panel is-open' : 'how-panel'} id="how-it-works">
              <div className="how-panel-inner">
                <div className="how-panel-body">
                  <span className="section-kicker">{t.howKicker}</span>
                  {t.howParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <div className="how-panel-actions">
                    <button type="button" className="primary-cta" onClick={() => onRequest('order')}>
                      {t.ctaOrder} ↗
                    </button>
                    <button type="button" className="outline-cta" onClick={() => setHowOpen(false)}>
                      {t.collapse} ↑
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <nav className="filters" aria-label={t.filterAria}>
            <button
              type="button"
              aria-pressed={filter === 'all'}
              className={filter === 'all' ? 'active' : ''}
              onClick={() => choose('all')}
            >
              {t.all}
              <sup>{pad(projects.length)}</sup>
            </button>
            {CATEGORY_ORDER.map((c) => (
              <button
                type="button"
                key={c}
                aria-pressed={filter === c}
                className={filter === c ? 'active' : ''}
                onClick={() => choose(c)}
              >
                {t.categories[c]}
                <sup>{pad(projects.filter((p) => p.category === c).length)}</sup>
              </button>
            ))}
          </nav>

          <div className="collection-line">
            <span>{t.projects(visible.length)}</span>
          </div>

          <section className="project-grid">
            {visible.map((p) => {
              const index = pad(projects.findIndex((x) => x.id === p.id) + 1);
              return (
                <article className="project-card" key={p.id}>
                  <div className="preview-pair">
                    <button
                      type="button"
                      className="shot desktop-shot"
                      aria-label={`${t.cardPreviewAria}: ${p.title} — ${t.desktop}`}
                      onClick={() => onOpen(p.id, 'desktop')}
                    >
                      <img src={p.shots.pc} alt={`${p.title} — ${t.desktop}`} loading="lazy" />
                      <span className="open-overlay">
                        <span>{t.hoverOpen}</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="shot mobile-shot"
                      aria-label={`${t.cardPreviewAria}: ${p.title} — ${t.mobile}`}
                      onClick={() => onOpen(p.id, 'mobile')}
                    >
                      <img src={p.shots.mobile} alt={`${p.title} — ${t.mobile}`} loading="lazy" />
                      <span className="open-overlay">
                        <span>{t.hoverOpen}</span>
                      </span>
                    </button>
                  </div>

                  <div className="project-meta">
                    <span>{index}</span>
                    <span>{t.categories[p.category]}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p className="project-description">{p.description[lang]}</p>
                  <p className="project-fit">
                    <strong>{t.fitPrefix}</strong> {p.fit[lang]}
                  </p>
                  <div className="project-offer">
                    <span className="project-price">{t.price}</span>
                  </div>
                  <div className="project-bottom">
                    <button type="button" className="primary-cta" onClick={() => onRequest('order', p.id)}>
                      {t.cardOrder} ↗
                    </button>
                    <button type="button" className="outline-cta secondary-demo" onClick={() => onOpen(p.id, 'desktop')}>
                      {t.hoverOpen} ↗
                    </button>
                  </div>
                </article>
              );
            })}
          </section>

          {visible.length === 0 && <p className="empty-state">—</p>}

          <section className="services" id="services" aria-labelledby="services-title">
            <div className="services-head">
              <span className="section-kicker">{t.seoKicker}</span>
              <h2 id="services-title">{t.seoTitle}</h2>
              <p className="services-intro">{t.seoIntro}</p>
            </div>
            <div className="services-grid">
              {t.seoServices.map((service) => (
                <article className="service-card" key={service.name}>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <div className="services-text">
              {t.seoParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="contact-panel">
            <div className="contact-panel-top">
              <span className="section-kicker">{t.contactKicker}</span>
              <Pixel />
            </div>
            <h2>
              {t.contactTitle.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p>{t.contactText}</p>
            <div className="contact-offer">
              <strong>{t.price}</strong>
              <span>{t.priceNote}</span>
            </div>
            <div className="contact-buttons">
              <button type="button" className="primary-cta" onClick={() => onRequest('estimate')}>
                {t.ctaEstimate} ↗
              </button>
              <button type="button" className="outline-cta" onClick={() => onRequest('contact')}>
                {t.ctaContact}
              </button>
            </div>
            <p className="connection-status">{t.contactStatus}</p>
          </section>

          <section className="contacts-block" id="contacts" aria-label={t.menuContacts}>
            <SocialLinks t={t} align="start" className="social-large" />
          </section>

          <footer className="conversion-footer">
            <div>
              <span className="footer-brand">{t.brand}</span>
              <span className="footer-note">{t.footerNote}</span>
              <span className="footer-copyright">© 2026 {t.brand}</span>
              <p className="footer-geo">{t.geoFooter}</p>
            </div>
          </footer>

          <div className="catalog-footer">
            <Pixel />
            <span>
              {t.endCollection} / {total}
            </span>
            <button
              type="button"
              aria-label={t.toTop}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
