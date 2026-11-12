import React from 'react';
import { LANGS } from '../../i18n';
import type { Lang } from '../../types';

export const LangSwitch: React.FC<{ lang: Lang; onChange: (lang: Lang) => void; ariaLabel: string; inverse?: boolean }> = ({
  lang,
  onChange,
  ariaLabel,
  inverse = false,
}) => (
  <div className={`lang-switch ${inverse ? 'is-inverse' : ''}`} role="group" aria-label={ariaLabel}>
    {LANGS.map((item) => (
      <button
        type="button"
        key={item.key}
        className={item.key === lang ? 'active' : ''}
        aria-pressed={item.key === lang}
        lang={item.key}
        onClick={() => onChange(item.key)}
      >
        {item.label}
      </button>
    ))}
  </div>
);
