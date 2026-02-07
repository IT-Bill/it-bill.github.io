import { ui, defaultLang, type Lang } from './ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as any)[key] || ui[defaultLang][key] || key;
  };
}

/**
 * Get the localized path for a given route using Astro's built-in i18n.
 */
export function getLocalePath(path: string, lang: Lang): string {
  return getRelativeLocaleUrl(lang, path);
}

/**
 * Get the alternate language
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

/**
 * Get the switch URL for the alternate language using Astro's i18n
 */
export function getSwitchLangUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const alternateLang = getAlternateLang(lang);
  // Extract path after /{lang}/
  const match = url.pathname.match(/^\/[^/]+\/(.*)/);
  const subPath = match ? match[1] : '';
  return getRelativeLocaleUrl(alternateLang, subPath);
}
