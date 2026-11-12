import type { CategoryKey, Lang } from './types';

export const LANGS: { key: Lang; label: string }[] = [
  { key: 'uk', label: 'UA' },
  { key: 'en', label: 'EN' },
  { key: 'ru', label: 'RU' },
];

export const CATEGORY_ORDER: CategoryKey[] = ['shop', 'corporate', 'landing', 'services', 'blog'];

export interface UiDict {
  brand: string;
  documentTitle: string;
  documentDescription: string;
  navCatalog: string;
  navOrder: string;
  navInstagram: string;
  menuOpen: string;
  menuClose: string;
  menuWord: string;
  closeWord: string;
  langAria: string;
  heroTitle: string;
  heroSubtitle: string;
  price: string;
  priceNote: string;
  ctaOrder: string;
  ctaEstimate: string;
  ctaContact: string;
  howToggle: string;
  howKicker: string;
  howParagraphs: string[];
  collapse: string;
  filterAria: string;
  all: string;
  categories: Record<CategoryKey, string>;
  collection: string;
  projects: (n: number) => string;
  fitPrefix: string;
  cardOrder: string;
  cardPreviewAria: string;
  hoverOpen: string;
  desktop: string;
  mobile: string;
  goToSite: string;
  loading: string;
  fallbackNote: string;
  back: string;
  backAria: string;
  notFound: string;
  modeAria: string;
  contactKicker: string;
  contactTitle: string;
  contactText: string;
  contactStatus: string;
  footerNote: string;
  endCollection: string;
  toTop: string;
  requestKickerOrder: string;
  requestKickerEstimate: string;
  requestKickerContact: string;
  requestTitleOrder: string;
  requestTitleEstimate: string;
  requestTitleContact: string;
  requestPriceSmall: string;
  formStatus: string;
  labelProject: string;
  optionHelp: string;
  labelName: string;
  placeholderName: string;
  labelChannel: string;
  channelPhone: string;
  labelContactEmail: string;
  labelContactPhone: string;
  labelContact: (channel: string) => string;
  placeholderContactEmail: string;
  placeholderContactPhone: string;
  placeholderContact: string;
  labelTask: string;
  placeholderTask: string;
  submitRequest: string;
  formHelp: string;
  confirmKicker: string;
  confirmTitle: string;
  confirmNotSent: string;
  dtName: string;
  dtContact: string;
  dtSite: string;
  dtTask: string;
  dtPrice: string;
  priceStart: string;
  editRequest: string;
  telegramPending: string;
  instagramAria: string;
  requestSocialsNote: string;
  orderFromPreview: string;
  seoKicker: string;
  seoTitle: string;
  seoIntro: string;
  seoParagraphs: string[];
  seoServices: { name: string; text: string }[];
  geoKicker: string;
  geoTitle: string;
  geoText: string;
  geoCities: string[];
  geoFooter: string;
}

const ru: UiDict = {
  brand: 'ГОТОВЫЕ САЙТЫ',
  documentTitle: 'Разработка сайтов по Украине | Готовые сайты',
  documentDescription:
    'Разработка сайтов по Украине: Киев, Харьков, Днепр, Одесса, Львов, Черновцы, Чернигов. Дизайн, вёрстка, настройка, запуск. 12 готовых проектов, от 3 000 грн.',
  navCatalog: 'Каталог сайтов',
  navOrder: 'Цены и заказ',
  navInstagram: 'Instagram',
  menuOpen: 'Открыть меню',
  menuClose: 'Закрыть меню',
  menuWord: 'МЕНЮ',
  closeWord: 'ЗАКРЫТЬ',
  langAria: 'Язык сайта',
  heroTitle: 'Каталог готовых сайтов',
  heroSubtitle: 'Готовые проекты для бизнеса, портфолио и лендингов. Быстрый запуск, современный дизайн.',
  price: 'от 3 000 грн',
  priceNote: 'Стартовая цена · итог зависит от задачи',
  ctaOrder: 'Заказать сайт',
  ctaEstimate: 'Посчитать проект',
  ctaContact: 'Связаться',
  howToggle: 'Как это работает',
  howKicker: 'КАК ЭТО РАБОТАЕТ',
  howParagraphs: [
    'В каталоге представлены готовые сайты. Пока это демонстрационные проекты: они не закреплены за конкретным заказчиком, поэтому любой из них мы можем оформить под вас.',
    'Мы наполним сайт вашей информацией и фотографиями, уберём или дополним блоки, изменим структуру под вашу задачу. Если готовое решение не подходит, разработаем сайт с нуля.',
    'Просто расскажите, какой стиль вам близок. Мы подберём решение под ваш вкус и задачу, настроим все параметры, подключим домен, формы обратной связи и мессенджеры. Организационные вопросы берём на себя.',
    'Вы получаете готовый работающий сайт.',
  ],
  collapse: 'Свернуть',
  filterAria: 'Тип сайта',
  all: 'Все',
  categories: { shop: 'Магазины', corporate: 'Корпоративные', landing: 'Лендинги', services: 'Услуги', blog: 'Блоги' },
  collection: 'КОЛЛЕКЦИЯ',
  projects: (n) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    const word = mod10 === 1 && mod100 !== 11 ? 'проект' : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 'проекта' : 'проектов';
    return `${n} ${word}`;
  },
  fitPrefix: 'Подойдёт:',
  cardOrder: 'Заказать',
  cardPreviewAria: 'Открыть предпросмотр',
  hoverOpen: 'Открыть',
  desktop: 'ПК-версия',
  mobile: 'Мобильная',
  goToSite: 'Перейти на сайт',
  loading: 'Загружаем сайт…',
  fallbackNote: 'Сайт не открывается встроенным окном — показываем скриншот.',
  back: 'Назад',
  backAria: 'Назад',
  notFound: 'Проект не найден',
  modeAria: 'Версия сайта',
  contactKicker: 'ЕСТЬ ИДЕЯ? / ДАВАЙ ОБСУДИМ',
  contactTitle: 'Твой проект.\nТвой запуск.',
  contactText: 'Выбери основу из коллекции или расскажи о своей задаче.',
  contactStatus: 'Форма готовит заявку. Отправка пока не подключена — данные остаются в этом окне.',
  footerNote: 'Готовые проекты. Адаптация под ваш бизнес.',
  endCollection: 'КОНЕЦ КОЛЛЕКЦИИ',
  toTop: 'Вернуться наверх',
  requestKickerOrder: 'ЗАКАЗ САЙТА',
  requestKickerEstimate: 'РАСЧЁТ СТОИМОСТИ',
  requestKickerContact: 'СВЯЗЬ',
  requestTitleOrder: 'Начнём с твоего сайта.',
  requestTitleEstimate: 'Посчитаем проект.',
  requestTitleContact: 'Давай на связи.',
  requestPriceSmall: 'Стартовая цена · не окончательный расчёт',
  formStatus: 'Форма готовит заявку: отправка пока не подключена. Данные остаются в этом окне и никуда не отправляются.',
  labelProject: 'Основа для сайта',
  optionHelp: 'Нужна помощь с выбором',
  labelName: 'Как тебя зовут',
  placeholderName: 'Имя',
  labelChannel: 'Где связаться',
  channelPhone: 'Телефон',
  labelContactEmail: 'Твой email',
  labelContactPhone: 'Номер телефона',
  labelContact: (channel) => `Твой ${channel}`,
  placeholderContactEmail: 'you@example.com',
  placeholderContactPhone: 'Номер с кодом страны',
  placeholderContact: '@username или ссылка',
  labelTask: 'Что нужно сделать',
  placeholderTask: 'Чем занимаешься, что показать на сайте, какие функции нужны…',
  submitRequest: 'Подготовить заявку',
  formHelp: 'Это пока не отправка и не оформление платного заказа.',
  confirmKicker: 'ЧЕРНОВИК / БЕЗ ОТПРАВКИ',
  confirmTitle: 'Заявка подготовлена.',
  confirmNotSent: 'Не отправлена: канал приёма ещё не подключён.',
  dtName: 'Имя',
  dtContact: 'Связь',
  dtSite: 'Сайт',
  dtTask: 'Задача',
  dtPrice: 'Стоимость',
  priceStart: 'от 3 000 грн · стартовая',
  editRequest: 'Изменить заявку',
  telegramPending: 'Ссылка Telegram появится позже.',
  instagramAria: 'Instagram — @olegwebdesign',
  requestSocialsNote: 'Соцссылки настраиваются.',
  orderFromPreview: 'Заказать',
  seoKicker: 'ЧТО МЫ ДЕЛАЕМ',
  seoTitle: 'Разработка сайтов, лендингов и веб-приложений',
  seoIntro:
    'Готовый сайт из каталога запускаем за несколько дней. Если нужен индивидуальный проект, собираем сайт с нуля: дизайн, вёрстка, настройка и запуск.',
  seoParagraphs: [
    'Мы занимаемся разработкой сайтов для бизнеса: корпоративные сайты, лендинги, интернет-магазины, сайты услуг и блоги. Каждый проект делаем адаптивным, чтобы он нормально открывался на телефоне, планшете и компьютере.',
    'В работу входит дизайн сайта, вёрстка, настройка домена и почты, подключение форм обратной связи и мессенджеров, базовая SEO-настройка: заголовки, описания, карта сайта и разметка для поисковых систем. Дальше наполняем сайт вашей информацией и фотографиями и проверяем результат на реальных устройствах.',
    'Отдельное направление это веб-приложения: личные кабинеты, калькуляторы, формы записи, каталоги с фильтрами и оплатой. Если нужен не просто сайт, а рабочая система под ваш процесс, собираем её под задачу.',
  ],
  seoServices: [
    { name: 'Разработка сайтов', text: 'Корпоративные сайты, визитки и многостраничные проекты под ваш бизнес.' },
    { name: 'Лендинги', text: 'Одностраничники под услугу, запуск продукта или рекламную кампанию.' },
    { name: 'Дизайн сайтов', text: 'Макет, типографика, сетка и адаптив под телефон и планшет.' },
    { name: 'Настройка сайтов и SEO', text: 'Домен, почта, формы, аналитика, карта сайта и разметка для поиска.' },
    { name: 'Интернет-магазины', text: 'Каталог с фильтрами, карточками товаров, корзиной и оплатой.' },
    { name: 'Веб-приложения', text: 'Личные кабинеты, калькуляторы, записи и внутренние сервисы.' },
  ],
  geoKicker: 'ГЕОГРАФИЯ',
  geoTitle: 'Разработка сайтов по всей Украине',
  geoText:
    'Работаем с бизнесом из Киева, Харькова, Днепра, Одессы и Чернигова, а также с клиентами из других городов. Создание сайта идёт удалённо: задачу, макеты и правки согласовываем онлайн, поэтому город не имеет значения. Лендинг, корпоративный сайт или интернет-магазин запускаем под ключ и передаём готовым к работе.',
  geoCities: ['Киев', 'Харьков', 'Днепр', 'Одесса', 'Львов', 'Черновцы', 'Чернигов', 'Вся Украина'],
  geoFooter: 'Разработка сайтов: Киев · Харьков · Днепр · Одесса · Львов · Черновцы · Чернигов · вся Украина',
};

const uk: UiDict = {
  brand: 'ГОТОВІ САЙТИ',
  documentTitle: 'Розробка сайтів по Україні | Готові сайти',
  documentDescription:
    'Розробка сайтів по Україні: Київ, Харків, Дніпро, Одеса, Львів, Чернівці, Чернігів. Дизайн, верстка, налаштування, запуск. 12 готових проєктів, від 3 000 грн.',
  navCatalog: 'Каталог сайтів',
  navOrder: 'Ціни та замовлення',
  navInstagram: 'Instagram',
  menuOpen: 'Відкрити меню',
  menuClose: 'Закрити меню',
  menuWord: 'МЕНЮ',
  closeWord: 'ЗАКРИТИ',
  langAria: 'Мова сайту',
  heroTitle: 'Каталог готових сайтів',
  heroSubtitle: 'Готові проєкти для бізнесу, портфоліо та лендингів. Швидкий запуск, сучасний дизайн.',
  price: 'від 3 000 грн',
  priceNote: 'Стартова ціна · підсумок залежить від задачі',
  ctaOrder: 'Замовити сайт',
  ctaEstimate: 'Порахувати проєкт',
  ctaContact: 'Зв’язатися',
  howToggle: 'Як це працює',
  howKicker: 'ЯК ЦЕ ПРАЦЮЄ',
  howParagraphs: [
    'У каталозі представлені готові сайти. Поки це демонстраційні проєкти: вони не закріплені за конкретним замовником, тому будь-який із них ми можемо оформити під вас.',
    'Ми наповнимо сайт вашою інформацією та фотографіями, приберемо або доповнимо блоки, змінимо структуру під вашу задачу. Якщо готове рішення не підходить, розробимо сайт з нуля.',
    'Просто розкажіть, який стиль вам близький. Ми підберемо рішення під ваш смак і задачу, налаштуємо всі параметри, підключимо домен, форми зворотного зв’язку та месенджери. Організаційні питання беремо на себе.',
    'Ви отримуєте готовий робочий сайт.',
  ],
  collapse: 'Згорнути',
  filterAria: 'Тип сайту',
  all: 'Усі',
  categories: { shop: 'Магазини', corporate: 'Корпоративні', landing: 'Лендинги', services: 'Послуги', blog: 'Блоги' },
  collection: 'КОЛЕКЦІЯ',
  projects: (n) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    const word = mod10 === 1 && mod100 !== 11 ? 'проєкт' : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 'проєкти' : 'проєктів';
    return `${n} ${word}`;
  },
  fitPrefix: 'Підійде:',
  cardOrder: 'Замовити',
  cardPreviewAria: 'Відкрити перегляд',
  hoverOpen: 'Відкрити',
  desktop: 'ПК-версія',
  mobile: 'Мобільна',
  goToSite: 'Перейти на сайт',
  loading: 'Завантажуємо сайт…',
  fallbackNote: 'Сайт не відкривається у вбудованому вікні — показуємо скриншот.',
  back: 'Назад',
  backAria: 'Назад',
  notFound: 'Проєкт не знайдено',
  modeAria: 'Версія сайту',
  contactKicker: 'Є ІДЕЯ? / ДАВАЙ ОБГОВОРИМО',
  contactTitle: 'Твій проєкт.\nТвій запуск.',
  contactText: 'Обери основу з колекції або розкажи про свою задачу.',
  contactStatus: 'Форма готує заявку. Відправлення поки не підключене — дані залишаються в цьому вікні.',
  footerNote: 'Готові проєкти. Адаптація під ваш бізнес.',
  endCollection: 'КІНЕЦЬ КОЛЕКЦІЇ',
  toTop: 'Повернутися вгору',
  requestKickerOrder: 'ЗАМОВЛЕННЯ САЙТУ',
  requestKickerEstimate: 'РОЗРАХУНОК ВАРТОСТІ',
  requestKickerContact: 'ЗВ’ЯЗОК',
  requestTitleOrder: 'Почнімо з твого сайту.',
  requestTitleEstimate: 'Порахуймо проєкт.',
  requestTitleContact: 'Будьмо на зв’язку.',
  requestPriceSmall: 'Стартова ціна · не остаточний розрахунок',
  formStatus: 'Форма готує заявку: відправлення поки не підключене. Дані залишаються в цьому вікні й нікуди не надсилаються.',
  labelProject: 'Основа для сайту',
  optionHelp: 'Потрібна допомога з вибором',
  labelName: 'Як тебе звати',
  placeholderName: 'Ім’я',
  labelChannel: 'Де зв’язатися',
  channelPhone: 'Телефон',
  labelContactEmail: 'Твій email',
  labelContactPhone: 'Номер телефону',
  labelContact: (channel) => `Твій ${channel}`,
  placeholderContactEmail: 'you@example.com',
  placeholderContactPhone: 'Номер із кодом країни',
  placeholderContact: '@username або посилання',
  labelTask: 'Що потрібно зробити',
  placeholderTask: 'Чим займаєшся, що показати на сайті, які функції потрібні…',
  submitRequest: 'Підготувати заявку',
  formHelp: 'Це поки не відправлення й не оформлення платного замовлення.',
  confirmKicker: 'ЧЕРНЕТКА / БЕЗ ВІДПРАВЛЕННЯ',
  confirmTitle: 'Заявку підготовлено.',
  confirmNotSent: 'Не надіслана: канал прийому ще не підключено.',
  dtName: 'Ім’я',
  dtContact: 'Зв’язок',
  dtSite: 'Сайт',
  dtTask: 'Задача',
  dtPrice: 'Вартість',
  priceStart: 'від 3 000 грн · стартова',
  editRequest: 'Змінити заявку',
  telegramPending: 'Посилання Telegram з’явиться пізніше.',
  instagramAria: 'Instagram — @olegwebdesign',
  requestSocialsNote: 'Соцпосилання налаштовуються.',
  orderFromPreview: 'Замовити',
  seoKicker: 'ЩО МИ РОБИМО',
  seoTitle: 'Розробка сайтів, лендингів і вебзастосунків',
  seoIntro:
    'Готовий сайт з каталогу запускаємо за кілька днів. Якщо потрібен індивідуальний проєкт, збираємо сайт з нуля: дизайн, верстка, налаштування та запуск.',
  seoParagraphs: [
    'Ми займаємося розробкою сайтів для бізнесу: корпоративні сайти, лендинги, інтернет-магазини, сайти послуг і блоги. Кожен проєкт робимо адаптивним, щоб він нормально відкривався на телефоні, планшеті й комп’ютері.',
    'У роботу входить дизайн сайту, верстка, налаштування домену та пошти, підключення форм зворотного зв’язку й месенджерів, базова SEO-настройка: заголовки, описи, карта сайту та розмітка для пошукових систем. Далі наповнюємо сайт вашою інформацією та фотографіями і перевіряємо результат на реальних пристроях.',
    'Окремий напрям це вебзастосунки: особисті кабінети, калькулятори, форми запису, каталоги з фільтрами й оплатою. Якщо потрібен не просто сайт, а робоча система під ваш процес, збираємо її під задачу.',
  ],
  seoServices: [
    { name: 'Розробка сайтів', text: 'Корпоративні сайти, візитки й багатосторінкові проєкти під ваш бізнес.' },
    { name: 'Лендинги', text: 'Односторінкові сайти під послугу, запуск продукту або рекламну кампанію.' },
    { name: 'Дизайн сайтів', text: 'Макет, типографіка, сітка й адаптив під телефон і планшет.' },
    { name: 'Налаштування сайтів і SEO', text: 'Домен, пошта, форми, аналітика, карта сайту й розмітка для пошуку.' },
    { name: 'Інтернет-магазини', text: 'Каталог з фільтрами, картками товарів, кошиком і оплатою.' },
    { name: 'Вебзастосунки', text: 'Особисті кабінети, калькулятори, записи та внутрішні сервіси.' },
  ],
  geoKicker: 'ГЕОГРАФІЯ',
  geoTitle: 'Розробка сайтів по всій Україні',
  geoText:
    'Працюємо з бізнесом із Києва, Харкова, Дніпра, Одеси й Чернігова, а також із клієнтами з інших міст. Створення сайту відбувається віддалено: задачу, макети й правки узгоджуємо онлайн, тому місто не має значення. Лендинг, корпоративний сайт або інтернет-магазин запускаємо під ключ і передаємо готовим до роботи.',
  geoCities: ['Київ', 'Харків', 'Дніпро', 'Одеса', 'Львів', 'Чернівці', 'Чернігів', 'Уся Україна'],
  geoFooter: 'Розробка сайтів: Київ · Харків · Дніпро · Одеса · Львів · Чернівці · Чернігів · уся Україна',
};

const en: UiDict = {
  brand: 'READY SITES',
  documentTitle: 'Website development across Ukraine | Ready sites',
  documentDescription:
    'Website development across Ukraine: Kyiv, Kharkiv, Dnipro, Odesa, Lviv, Chernivtsi, Chernihiv. Design, markup, setup, launch. 12 ready projects, from UAH 3,000.',
  navCatalog: 'Catalogue',
  navOrder: 'Prices & order',
  navInstagram: 'Instagram',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  menuWord: 'MENU',
  closeWord: 'CLOSE',
  langAria: 'Site language',
  heroTitle: 'Catalogue of ready websites',
  heroSubtitle: 'Ready-made projects for business, portfolios and landings. Fast launch, modern design.',
  price: 'from UAH 3,000',
  priceNote: 'Starting price · the final quote depends on the task',
  ctaOrder: 'Order a website',
  ctaEstimate: 'Estimate a project',
  ctaContact: 'Get in touch',
  howToggle: 'How it works',
  howKicker: 'HOW IT WORKS',
  howParagraphs: [
    'The catalogue presents ready-made websites. For now these are demo projects: they are not assigned to any client, so we can tailor any of them to you.',
    'We will fill the site with your information and photos, remove or extend blocks, and adjust the structure to your task. If none of the ready solutions fits, we will build a website from scratch.',
    'Simply tell us which style you like. We will match a solution to your taste and task, set up all the parameters, connect the domain, contact forms and messengers. We take care of the organisational side.',
    'You receive a finished, working website.',
  ],
  collapse: 'Collapse',
  filterAria: 'Site type',
  all: 'All',
  categories: { shop: 'Shops', corporate: 'Corporate', landing: 'Landings', services: 'Services', blog: 'Blogs' },
  collection: 'COLLECTION',
  projects: (n) => `${n} ${n === 1 ? 'project' : 'projects'}`,
  fitPrefix: 'Best for:',
  cardOrder: 'Order',
  cardPreviewAria: 'Open preview',
  hoverOpen: 'Open',
  desktop: 'Desktop',
  mobile: 'Mobile',
  goToSite: 'Open the site',
  loading: 'Loading the site…',
  fallbackNote: 'This site can’t be shown in an embedded frame — showing a screenshot.',
  back: 'Back',
  backAria: 'Back',
  notFound: 'Project not found',
  modeAria: 'Site version',
  contactKicker: 'HAVE AN IDEA? / LET’S TALK',
  contactTitle: 'Your project.\nYour launch.',
  contactText: 'Pick a base from the collection or tell me about your task.',
  contactStatus: 'The form prepares a request. Sending is not connected yet — the data stays in this window.',
  footerNote: 'Ready-made projects. Tailored to your business.',
  endCollection: 'END OF COLLECTION',
  toTop: 'Back to top',
  requestKickerOrder: 'WEBSITE ORDER',
  requestKickerEstimate: 'COST ESTIMATE',
  requestKickerContact: 'CONTACT',
  requestTitleOrder: 'Let’s start with your site.',
  requestTitleEstimate: 'Let’s estimate the project.',
  requestTitleContact: 'Let’s stay in touch.',
  requestPriceSmall: 'Starting price · not a final quote',
  formStatus: 'The form prepares a request: sending is not connected yet. The data stays in this window and is not sent anywhere.',
  labelProject: 'Base for the site',
  optionHelp: 'Help me choose',
  labelName: 'Your name',
  placeholderName: 'Name',
  labelChannel: 'Where to reach you',
  channelPhone: 'Phone',
  labelContactEmail: 'Your email',
  labelContactPhone: 'Phone number',
  labelContact: (channel) => `Your ${channel}`,
  placeholderContactEmail: 'you@example.com',
  placeholderContactPhone: 'Number with country code',
  placeholderContact: '@username or a link',
  labelTask: 'What needs to be done',
  placeholderTask: 'What you do, what to show on the site, which features you need…',
  submitRequest: 'Prepare the request',
  formHelp: 'This is not a send yet and not a paid order.',
  confirmKicker: 'DRAFT / NOT SENT',
  confirmTitle: 'Request prepared.',
  confirmNotSent: 'Not sent: the receiving channel is not connected yet.',
  dtName: 'Name',
  dtContact: 'Contact',
  dtSite: 'Site',
  dtTask: 'Task',
  dtPrice: 'Price',
  priceStart: 'from UAH 3,000 · starting',
  editRequest: 'Edit the request',
  telegramPending: 'The Telegram link will appear later.',
  instagramAria: 'Instagram — @olegwebdesign',
  requestSocialsNote: 'Social links are being set up.',
  orderFromPreview: 'Order',
  seoKicker: 'WHAT WE DO',
  seoTitle: 'Website development, landing pages and web apps',
  seoIntro:
    'A ready site from the catalogue launches within days. If you need a custom project, we build the website from scratch: design, markup, setup and launch.',
  seoParagraphs: [
    'We develop websites for business: corporate sites, landing pages, online stores, service sites and blogs. Every project is responsive, so it opens properly on phones, tablets and desktops.',
    'The work includes website design, front-end markup, domain and email setup, contact forms and messengers, plus basic SEO setup: titles, descriptions, a sitemap and structured data for search engines. Then we fill the site with your information and photos and check the result on real devices.',
    'Web apps are a separate direction: dashboards, calculators, booking forms, catalogues with filters and payments. If you need a working system rather than just a website, we build it around your process.',
  ],
  seoServices: [
    { name: 'Website development', text: 'Corporate sites, one-pagers and multi-page projects for your business.' },
    { name: 'Landing pages', text: 'Single-page sites for a service, a product launch or an ad campaign.' },
    { name: 'Website design', text: 'Layout, typography, grid and responsive behaviour for phones and tablets.' },
    { name: 'Website setup and SEO', text: 'Domain, email, forms, analytics, sitemap and structured data for search.' },
    { name: 'Online stores', text: 'A catalogue with filters, product cards, a cart and payments.' },
    { name: 'Web apps', text: 'Dashboards, calculators, booking tools and internal services.' },
  ],
  geoKicker: 'COVERAGE',
  geoTitle: 'Website development across Ukraine',
  geoText:
    'We work with businesses from Kyiv, Kharkiv, Dnipro, Odesa and Chernihiv, and with clients from other cities too. The whole process runs remotely: we discuss the task, agree on designs and revisions online, so your city does not matter. A landing page, corporate site or online store is delivered turnkey and ready to use.',
  geoCities: ['Kyiv', 'Kharkiv', 'Dnipro', 'Odesa', 'Lviv', 'Chernivtsi', 'Chernihiv', 'All Ukraine'],
  geoFooter: 'Website development: Kyiv · Kharkiv · Dnipro · Odesa · Lviv · Chernivtsi · Chernihiv · all Ukraine',
};

export const UI: Record<Lang, UiDict> = { ru, uk, en };

export const INSTAGRAM_URL = 'https://instagram.com/olegwebdesign';
