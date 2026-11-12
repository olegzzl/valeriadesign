export type Lang = 'ru' | 'uk' | 'en';
export type CategoryKey = 'shop' | 'corporate' | 'landing' | 'blog' | 'services';
export interface LocalizedText { ru: string; uk: string; en: string }
export interface Project {
  id: string;
  title: string;
  category: CategoryKey;
  url: string;
  shots: { pc: string; mobile: string };
  description: LocalizedText;
  fit: LocalizedText;
  /** false — сайт запрещает встраивание во фрейм (X-Frame-Options), показываем скриншот */
  embeddable?: boolean;
}
