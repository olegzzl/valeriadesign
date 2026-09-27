const fs = require('fs');

let html = fs.readFileSync('code.html', 'utf8');
const css = `
    /* ===== Блок: монитор + телефон рядом ===== */
    .devices { display: flex; align-items: flex-end; justify-content: center; gap: clamp(14px, 4vw, 44px); margin-bottom: 24px; }
    .dev-desk { flex: 1 1 auto; min-width: 0; max-width: 660px; cursor: pointer; }
    .dev-desk-screen { background: #111418; border-radius: 14px; padding: 10px; box-shadow: 0 14px 34px rgba(0,0,0,.22); position: relative; overflow: hidden; }
    .dev-desk-screen img { display: block; width: 100%; height: auto; border-radius: 6px; transition: filter 0.3s ease; }
    .dev-desk-stand { width: 88px; height: 32px; margin: 0 auto; background: linear-gradient(#1c2128, #14181d); clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%); }
    .dev-desk-base { width: 170px; height: 8px; margin: 0 auto; background: #1c2128; border-radius: 4px; }
    .dev-phone { flex: 0 0 clamp(110px, 28%, 200px); cursor: pointer; }
    .dev-phone-frame { position: relative; background: #111418; border-radius: 26px; padding: 8px; box-shadow: 0 14px 34px rgba(0,0,0,.22); overflow: hidden; }
    .dev-phone-frame img { display: block; width: 100%; height: auto; border-radius: 18px; transition: filter 0.3s ease; }
    .dev-phone-notch { position: absolute; top: 13px; left: 50%; transform: translateX(-50%); width: 36%; height: 10px; background: #111418; border-radius: 999px; z-index: 2; }

    .devices:has(.dev-desk:hover) .dev-phone img { filter: blur(3px); }
    .devices:has(.dev-phone:hover) .dev-desk img { filter: blur(3px); }

    .dev-desk-screen .open-overlay, .dev-phone-frame .open-overlay {
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.3s ease;
        background: rgba(0,0,0,0.2);
        z-index: 10; pointer-events: none;
        border-radius: inherit;
    }
    .dev-desk:hover .open-overlay, .dev-phone:hover .open-overlay { opacity: 1; }
</style>
`;

if (!html.includes('.dev-desk')) {
    html = html.replace('</style>', css);
    fs.writeFileSync('code.html', html);
}

// Now update insert_cards.js to filter out 303timer and conditionally use the new layout
let js = fs.readFileSync('insert_cards.js', 'utf8');
js = js.replace(/\{\s*title:\s*'303 Timer'[^}]+\},?\s*/g, '');

const generateCardCode = `function generateCard(site, index) {
    const isTest = site.name === 'psyhology-8jft';
    const visualBlock = isTest ? \`
<div class="devices card-visual">
  <div class="dev-desk" onclick="event.stopPropagation(); openPreview('desktop', '\${site.link}')">
    <div class="dev-desk-screen">
      <img src="screenshots/\${site.name}_pc.webp" alt="Версия для ПК">
      <div class="open-overlay"><span class="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">Открыть</span></div>
    </div>
    <div class="dev-desk-stand"></div>
    <div class="dev-desk-base"></div>
  </div>
  <div class="dev-phone" onclick="event.stopPropagation(); openPreview('mobile', '\${site.link}')">
    <div class="dev-phone-frame">
      <div class="dev-phone-notch"></div>
      <img src="screenshots/\${site.name}_mobile.webp" alt="Мобильная версия">
      <div class="open-overlay"><span class="bg-white/95 text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-md">Открыть</span></div>
    </div>
  </div>
</div>\` : \`
<div class="flex justify-between items-start mb-6 card-visual">
<div class="laptop-wrap w-3/4 aspect-[16/10] bg-[#e2e8f0] rounded-t-md p-1 relative shadow-sm cursor-pointer" onclick="event.stopPropagation(); openPreview('desktop', '\${site.link}')">
<div class="w-full h-full bg-white rounded-sm overflow-hidden relative">
<img alt="\${site.title}" class="w-full h-full object-cover object-top" src="screenshots/\${site.name}_pc.webp"/>
<div class="open-overlay"><span class="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">Открыть</span></div>
</div>
<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-1.5 bg-[#cbd5e1] rounded-b-xl"></div>
</div>
<div class="phone-wrap w-1/5 aspect-[9/19] bg-[#334155] rounded-xl p-1 relative shadow-sm ml-2 cursor-pointer" onclick="event.stopPropagation(); openPreview('mobile', '\${site.link}')">
<div class="w-full h-full bg-white rounded-lg overflow-hidden relative">
<img alt="\${site.title} Mobile" class="w-full h-full object-cover object-top" src="screenshots/\${site.name}_mobile.webp"/>
<div class="open-overlay"><span class="bg-white/95 text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-md">Открыть</span></div>
</div>
</div>
</div>\`;

    return \`
<!-- Card \${index + 1}: \${site.title} -->
<div class="bg-surface rounded-xl border border-outline-variant/50 p-6 device-shadow device-hover flex flex-col cursor-pointer group">
\${visualBlock}
<div class="mt-auto">
<div class="flex justify-between items-start mb-2">
<h4 class="font-headline-md text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">\${site.title}</h4>
<span class="bg-surface-variant text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded whitespace-nowrap ml-2">\${site.category}</span>
</div>
<p class="text-on-surface-variant text-sm mb-3 leading-relaxed line-clamp-3">\${site.description}</p>
<p class="text-on-surface text-xs mb-4 leading-relaxed"><strong>Подойдёт:</strong> \${site.suitedFor}</p>
<div class="flex justify-between items-center mt-4">
<span class="font-label-md text-label-md text-on-surface font-medium">от 15,000 грн.</span>
<button class="text-primary font-label-sm text-label-sm bg-primary/10 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
    Подробнее
</button>
</div>
</div>
</div>\`;
}`;

js = js.replace(/function generateCard[\s\S]*?const html/m, generateCardCode + '\n\nconst html');
fs.writeFileSync('insert_cards.js', js);
