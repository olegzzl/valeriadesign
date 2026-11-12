import React from 'react';
import { EMAIL_ADDRESS, INSTAGRAM_URL, TELEGRAM_URL } from '../../i18n';
import type { UiDict } from '../../i18n';

export const SocialLinks: React.FC<{ t: UiDict; align?: 'start' | 'end'; className?: string }> = ({
  t,
  align = 'end',
  className = '',
}) => (
  <div
    className={`social-links ${align === 'start' ? 'is-start' : ''} ${className}`.trim()}
  >
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
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram @spokum_chat"
        aria-label={t.telegramAria}
        className="social-link"
      >
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.2 3.6c.3-1.1-.8-1.9-1.8-1.5L2.9 9.1c-1.1.4-1 2 .1 2.3l4.4 1.4 1.6 5.1c.3.9 1.5 1.1 2 .4l2.3-2.8 4 3c.7.5 1.7.2 1.9-.7l2-14.2Z" />
          <path d="M9.2 12.7 18.5 6l-6.8 7.1" strokeLinecap="round" />
        </svg>
      </a>
      <a
        href={`mailto:${EMAIL_ADDRESS}`}
        title={EMAIL_ADDRESS}
        aria-label={t.emailAria}
        className="social-link social-mail"
      >
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="M3 6.5 12 13l9-6.5" />
        </svg>
      </a>
    </div>
  </div>
);
