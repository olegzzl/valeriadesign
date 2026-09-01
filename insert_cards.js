const fs = require('fs');

const sites = [
    { title: 'Voguish Gold', name: 'voguish-gold', link: 'https://voguish-gold.vercel.app/', category: 'Магазин' },
    { title: 'Streetwear 01', name: 'streetwear01', link: 'https://streetwear01.netlify.app/', category: 'Магазин' },
    { title: '303 Timer', name: '303timer', link: 'https://303timer.vercel.app/', category: 'Приложение' },
    { title: 'Studio 19', name: 'studio-19-pl', link: 'https://studio-19-pl.vercel.app/#hero', category: 'Корпоративный' },
    { title: 'Cosmetic Ivory', name: 'cosmetic-ivory', link: 'https://cosmetic-ivory.vercel.app/#home', category: 'Магазин' },
    { title: 'LED Studio', name: 'ledstudio', link: 'https://www.ledstudio.duckdns.org/', category: 'Лендинг' },
    { title: 'Streetwear 02', name: 'streetwear02', link: 'https://streetwear02.netlify.app/', category: 'Магазин' },
    { title: 'Scherlock', name: 'scherlock', link: 'https://scherlock.netlify.app/', category: 'Блог' },
    { title: 'Alex Diler', name: 'alexdiler', link: 'https://alexdiler.vercel.app/', category: 'Портфолио' },
    { title: 'Supermaster', name: 'supermaster-2', link: 'https://supermaster-2.vercel.app/', category: 'Услуги' },
    { title: 'Osite ETA', name: 'osite-eta', link: 'https://osite-eta.vercel.app/', category: 'Лендинг' },
    { title: 'Psyhology', name: 'psyhology-8jft', link: 'https://psyhology-8jft.vercel.app/', category: 'Сайт-визитка' }
];

function generateCard(site, index) {
    return `
<!-- Card ${index + 1}: ${site.title} -->
<div class="bg-surface rounded-xl border border-outline-variant/50 p-6 device-shadow device-hover flex flex-col cursor-pointer group">
<div class="flex justify-between items-start mb-6 card-visual">
<div class="laptop-wrap w-3/4 aspect-[16/10] bg-[#e2e8f0] rounded-t-md p-1 relative shadow-sm cursor-pointer" onclick="event.stopPropagation(); openPreview('desktop', '${site.link}')">
<div class="w-full h-full bg-white rounded-sm overflow-hidden relative">
<img alt="${site.title}" class="w-full h-full object-cover object-top" src="screenshots/${site.name}_pc.webp"/>
<div class="open-overlay"><span class="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">Открыть</span></div>
</div>
<div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-1.5 bg-[#cbd5e1] rounded-b-xl"></div>
</div>
<div class="phone-wrap w-1/5 aspect-[9/19] bg-[#334155] rounded-xl p-1 relative shadow-sm ml-2 cursor-pointer" onclick="event.stopPropagation(); openPreview('mobile', '${site.link}')">
<div class="w-full h-full bg-white rounded-lg overflow-hidden relative">
<img alt="${site.title} Mobile" class="w-full h-full object-cover object-top" src="screenshots/${site.name}_mobile.webp"/>
<div class="open-overlay"><span class="bg-white/95 text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-md">Открыть</span></div>
</div>
</div>
</div>
<div class="mt-auto">
<div class="flex justify-between items-start mb-2">
<h4 class="font-headline-md text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">${site.title}</h4>
<span class="bg-surface-variant text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded">${site.category}</span>
</div>
<div class="flex justify-between items-center mt-4">
<span class="font-label-md text-label-md text-on-surface font-medium">от 15,000 грн.</span>
<button class="text-primary font-label-sm text-label-sm bg-primary/10 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
    Подробнее
</button>
</div>
</div>
</div>`;
}

const html = fs.readFileSync('code.html', 'utf8');

const startIndex = html.indexOf('<!-- Card 1');
const endIndex = html.indexOf('</section>', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const before = html.substring(0, startIndex);
    const after = html.substring(endIndex); // Keeps the </section> tag
    
    let newCards = '';
    sites.forEach((site, index) => {
        newCards += generateCard(site, index) + '\n';
    });
    
    // Add the missing closing div for the grid container
    newCards += '</div>\n';
    
    const newHtml = before + newCards + after;
    fs.writeFileSync('code.html', newHtml);
    console.log("Successfully replaced cards in code.html");
} else {
    console.log("Failed to find bounds", startIndex, endIndex);
}
