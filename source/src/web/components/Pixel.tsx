import React from 'react';
export const Pixel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 5 5" aria-hidden="true">
    <path fill="currentColor" d="M2 0h1v2h2v1H3v2H2V3H0V2h2z" />
    <path fill="currentColor" opacity=".45" d="M1 1h1v1H1zm2 2h1v1H3z" />
  </svg>
);
