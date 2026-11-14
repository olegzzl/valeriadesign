import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import projectsData from './projects.json';
import type { CategoryKey, Lang, Project } from './types';
import { UI } from './i18n';
import { HomeScreen } from './web/screens/HomeScreen';
import { DemoScreen } from './web/screens/DemoScreen';
import { ContactScreen } from './web/screens/ContactScreen';
import './web/styles/index.css';

const projects = projectsData as unknown as Project[];
const LANG_KEY = 'ready-sites-lang';

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ru' || saved === 'uk' || saved === 'en') return saved;
  } catch {
    /* localStorage может быть недоступен */
  }
  // Язык браузера намеренно не используется: роботы поисковых систем заходят
  // с локалью en-US и получали английскую версию в индекс.
  return 'ru';
}

const readPath = () => location.hash.replace(/^#/, '') || '/';

function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [filter, setFilter] = useState<'all' | CategoryKey>('all');
  const [request, setRequest] = useState<{ projectId: string; intent: 'order' | 'estimate' | 'contact' }>({
    projectId: '',
    intent: 'order',
  });
  const [path, setPath] = useState<string>(readPath);
  const positions = useRef(new Map<string, number>());
  const currentPath = useRef(path);

  useEffect(() => {
    const onHash = () => {
      const next = readPath();
      setPath(next);
      currentPath.current = next;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => window.scrollTo(0, positions.current.get(next) || 0))
      );
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = UI[lang].documentTitle;
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', UI[lang].documentDescription);
    setMeta('meta[property="og:title"]', UI[lang].documentTitle);
    setMeta('meta[property="og:description"]', UI[lang].documentDescription);
    setMeta('meta[name="twitter:title"]', UI[lang].documentTitle);
    setMeta('meta[name="twitter:description"]', UI[lang].documentDescription);
    setMeta(
      'meta[property="og:locale"]',
      lang === 'ru' ? 'ru_RU' : lang === 'uk' ? 'uk_UA' : 'en_US'
    );
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = UI[lang];

  const navigate = (next: string) => {
    positions.current.set(currentPath.current, window.scrollY);
    if (readPath() !== next) {
      location.hash = next;
    } else {
      window.scrollTo(0, 0);
    }
  };

  const goBack = () => {
    positions.current.set(currentPath.current, window.scrollY);
    if (history.length > 1 && location.hash) history.back();
    else navigate('/');
  };

  const openDemo = (id: string, mode: 'desktop' | 'mobile') => {
    navigate(`/demo/${encodeURIComponent(id)}/${mode}`);
  };

  const changeMode = (id: string, mode: 'desktop' | 'mobile') => {
    const next = `/demo/${encodeURIComponent(id)}/${mode}`;
    history.replaceState(null, '', `#${next}`);
    currentPath.current = next;
    setPath(next);
  };

  const openRequest = (intent: 'order' | 'estimate' | 'contact', projectId?: string) => {
    setRequest({ projectId: projectId || '', intent });
    navigate('/request');
  };

  const demo = /^\/demo\/([^/]+)(?:\/(desktop|mobile))?\/?$/.exec(path);
  let screen: React.ReactNode;

  if (demo) {
    const id = decodeURIComponent(demo[1]);
    const project = projects.find((p) => p.id === id);
    const mode = (demo[2] as 'desktop' | 'mobile') || 'desktop';
    screen = project ? (
      <DemoScreen
        key={project.id}
        lang={lang}
        project={project}
        mode={mode}
        onMode={(next) => changeMode(project.id, next)}
        goBack={goBack}
        onRequest={openRequest}
      />
    ) : (
      <main className="contact-screen">
        <div className="request-content">
          <h1>{t.notFound}</h1>
          <a className="primary-cta" href="#/">
            {t.navCatalog}
          </a>
        </div>
      </main>
    );
  } else if (path === '/request') {
    screen = (
      <ContactScreen
        key={`${request.intent}-${request.projectId}`}
        lang={lang}
        projects={projects}
        initialProject={request.projectId}
        intent={request.intent}
        goBack={goBack}
      />
    );
  } else if (path === '/' || path === '') {
    screen = (
      <HomeScreen
        lang={lang}
        projects={projects}
        filter={filter}
        setFilter={setFilter}
        onLang={setLang}
        onOpen={openDemo}
        onRequest={openRequest}
      />
    );
  } else {
    screen = (
      <main className="contact-screen">
        <div className="request-content">
          <h1>{t.notFound}</h1>
          <a className="primary-cta" href="#/">
            {t.navCatalog}
          </a>
        </div>
      </main>
    );
  }

  return <>{screen}</>;
}

createRoot(document.getElementById('root')!).render(<App />);
