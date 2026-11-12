import React, { useState } from 'react';
import { INSTAGRAM_URL } from '../../i18n';
import type { UiDict } from '../../i18n';

export const SocialLinks: React.FC<{ t: UiDict; align?: 'start' | 'end' }> = ({ t, align = 'end' }) => {
  const [notice, setNotice] = useState('');
  return (
    <div className={`social-links ${align === 'start' ? 'is-start' : ''}`}>
      <div className="social-icons">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          aria-label={t.instagramAria}
          className="social-link"
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.1" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <button
          type="button"
          title="Telegram"
          aria-label="Telegram"
          onClick={() => setNotice(t.telegramPending)}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 3-4 18-6-6-4 3 1-7L21 3ZM8 11l-5-2L21 3M8 11l9-4-6 8" />
          </svg>
        </button>
      </div>
      {notice && <span className="social-notice" role="status">{notice}</span>}
    </div>
  );
};
