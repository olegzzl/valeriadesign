const fs = require('fs');

const sites = [
    { 
        title: 'NOCTA/08', 
        name: 'voguish-gold', 
        link: 'https://voguish-gold.vercel.app/', 
        category: 'Магазин',
        description: 'Магазин уличной одежды на английском с ценами в $: чистый минимализм, манифест, лукбук, фильтры категорий, quick-view и корзина. Вариант «для глобального рынка» - сдержанный, без лишнего шума.',
        suitedFor: 'D2C-брендам одежды, фитнес- и бег-экипировке, вело- и скейт-комьюнити, молодым маркам аксесссуаров.'
    },
    { 
        title: 'ASPHALT SAINTS', 
        name: 'streetwear01', 
        link: 'https://streetwear01.netlify.app/', 
        category: 'Магазин',
        description: 'Магазин под «дроп»-модель: лимитированная коллекция на первом экране, дерзкая ночная кампания, лукбук-сцены, коллекции муж/жен, цены в гривне, корзина. Самая смелая подача из трёх - для молодого амбициозного бренда.',
        suitedFor: 'уличным брендам, мотоклубам, хип-хоп мерчу, барбершопам, брендам спортивной экипировки.'
    },
    { 
        title: 'STUDIO 19', 
        name: 'studio-19-pl', 
        link: 'https://studio-19-pl.vercel.app/#hero', 
        category: 'Корпоративный',
        description: 'Сайт фотостудии с арендой залов: каталог залов с ценами за час, фильтры по интерьерам (лофт / минимализм / классика), блок профессионального оборудования, «кодекс студии», отзывы и онлайн-бронирование. Чёрно-белая премиальная подача в духе fashion-editorial.',
        suitedFor: 'фотостудиям, коворкингам, студиям йоги и танцев, репетиционным базам и звукозаписи, залам для мероприятий - любому бизнесу с почасовой арендой площадей и бронированием.'
    },
    { 
        title: 'Natalia Aesthetics', 
        name: 'cosmetic-ivory', 
        link: 'https://cosmetic-ivory.vercel.app/#home', 
        category: 'Магазин',
        description: 'Сайт косметолога: услуги с ценами, портфолио-кейсы с фото, блок «обо мне», календарь записи, форма связи, светлая эстетичная вёрстка плюс тёмная тема на выбор. Всё, что нужно beauty-мастеру, чтобы принимать клиентов онлайн.',
        suitedFor: 'косметологам, мастерам маникюра, бровистам, визажистам, парикмахерам, массажистам, тату-мастерам, салонам красоты.'
    },
    { 
        title: 'LUX LED Studio', 
        name: 'ledstudio', 
        link: 'https://www.ledstudio.duckdns.org/', 
        category: 'Лендинг',
        description: 'Интерактивное веб-приложение - симулятор LED-экрана: бегущая строка, стробоскоп, эквалайзер под музыку с пресетами, аудиоплеер, сохранение видео, три языка. Не шаблонный лендинг, а живой инструмент - наглядная демонстрация уровня разработки.',
        suitedFor: 'диджеям, стримерам и организациям вечеринок, владельцам LED-вывесок и бегущих строк; отлично работает как витрина кастомного веб-сервиса под любую задачу.'
    },
    { 
        title: 'COURT N°1', 
        name: 'streetwear02', 
        link: 'https://streetwear02.netlify.app/', 
        category: 'Магазин',
        description: 'Магазин уличной одежды в editorial-стилистике: карточки товаров с быстрым просмотром, категории, лукбук, манифест бренда, корзина. Вайб ночного города, баскетбола и аналоговой плёнки.',
        suitedFor: 'брендам одежды и аксесссуаров, спорттоварам, кроссовкам, джинсовым брендам, мерчу музыкантов и спортивных клубов.'
    },
    { 
        title: 'Sherlock Holmes', 
        name: 'scherlock', 
        link: 'https://scherlock.netlify.app/', 
        category: 'Блог',
        description: 'Концепт-сайт «консультирующего детектива» в викторианской стилистике: архив раскрытых дел, метод Холмса, специализация, отзывы клиентов и форма «передать дело». Три языка, узнаваемый юмор, запоминается с первого экрана.',
        suitedFor: 'частным детективам и юристам, квест-румам, организаторам квизов и тематических мероприятий - и как яркий образец «персонажного» бренда для любой ниши.'
    },
    { 
        title: 'Volkswagen', 
        name: 'alexdiler', 
        link: 'https://alexdiler.vercel.app/', 
        category: 'Портфолио',
        description: 'Сайт автодилера: каталог моделей с характеристиками и ценами, фильтры (в наличии / кроссоверы / электро), блок услуг (кредит, trade-in, сервис), цифры доверия, отзывы и онлайн-запись на тест-драйв. Солидная корпоративная подача.',
        suitedFor: 'автосалонам и дилерам других марок, автоподбору и выкупу, прокату авто, СТО и детейлингу - любому автомобильному бизнесу с каталогом и записью.'
    },
    { 
        title: 'Дмитрий', 
        name: 'supermaster-2', 
        link: 'https://supermaster-2.vercel.app/', 
        category: 'Услуги',
        description: 'Сайт мастера по ремонту и отделке: услуги, цена за час, калькуляторы работ и материалов с отправкой сметы, умный чат-помощник, подсказывающий цены по ключевым словам, кнопка «вызвать мастера». Практичный и убедительный.',
        suitedFor: 'мастерам на все руки, сантехникам, электрикам, плиточникам, сборщикам мебели, бригадам отделочников - калькулятор легко перенастроить под расчёт стоимости любых услуг.'
    },
    { 
        title: 'O³ STUDIO', 
        name: 'osite-eta', 
        link: 'https://osite-eta.vercel.app/', 
        category: 'Лендинг',
        description: 'Портфолио мультидисциплинарного креатора: фотография, видео и веб-разработка. Услуги по трём направлениям, портфолио с фильтрами проектов, контакты с формой, три языка интерфейса. Строгая тёмная сетка - ничего лишнего.',
        suitedFor: 'фотографам, видеографам, дизайнерам, разработчикам, маркетологам, креативным студиям и агентствам - всем, кто продаёт свои работы через портфолио.'
    },
    { 
        title: 'NEURALMIND', 
        name: 'psyhology-8jft', 
        link: 'https://psyhology-8jft.vercel.app/', 
        category: 'Сайт-визитка',
        description: 'Сайт частного психолога в тёмной «нейро»-эстетике: анимированный фон-нейросеть, сильный эмоциональный заголовок («Вы не сломаны»), блоки метода и терапии, счётчики статистики, финальная форма записи. Выглядит дороже 90% сайтов в нише и сразу цепляет с первого экрана.',
        suitedFor: 'психологам, психотерапевтам, коучам, гипнологам, репетиторам, юристам частной практики - всем экспертам, кто продаёт личные консультации.'
    }
];

function generateCard(site, index) {
    const isTest = site.name === 'psyhology-8jft';
    const visualBlock = isTest ? `
<div class="devices card-visual">
  <div class="dev-desk" onclick="event.stopPropagation(); openPreview('desktop', '${site.link}')">
    <div class="dev-desk-screen">
      <img src="screenshots/${site.name}_pc.webp" alt="Версия для ПК">
      <div class="open-overlay"><span class="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">Открыть</span></div>
    </div>
    <div class="dev-desk-stand"></div>
    <div class="dev-desk-base"></div>
  </div>
  <div class="dev-phone" onclick="event.stopPropagation(); openPreview('mobile', '${site.link}')">
    <div class="dev-phone-frame">
      <div class="dev-phone-notch"></div>
      <img src="screenshots/${site.name}_mobile.webp" alt="Мобильная версия">
      <div class="open-overlay"><span class="bg-white/95 text-slate-900 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-md">Открыть</span></div>
    </div>
  </div>
</div>` : `
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
</div>`;

    return `
<!-- Card ${index + 1}: ${site.title} -->
<div class="bg-surface rounded-xl border border-outline-variant/50 p-6 device-shadow device-hover flex flex-col cursor-pointer group">
${visualBlock}
<div class="mt-auto">
<div class="flex justify-between items-start mb-2">
<h4 class="font-headline-md text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">${site.title}</h4>
<span class="bg-surface-variant text-on-surface-variant font-label-sm text-[10px] px-2 py-0.5 rounded whitespace-nowrap ml-2">${site.category}</span>
</div>
<p class="text-on-surface-variant text-sm mb-3 leading-relaxed line-clamp-3">${site.description}</p>
<p class="text-on-surface text-xs mb-4 leading-relaxed"><strong>Подойдёт:</strong> ${site.suitedFor}</p>
<div class="flex justify-between items-center mt-4">
<span class="font-label-md text-label-md text-on-surface font-medium">от 3,000 грн.</span>
<button onclick="event.stopPropagation(); scrollToContacts('${site.title.replace(/'/g, "\\'")}')" class="text-primary font-label-sm text-label-sm bg-primary/10 px-4 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
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
