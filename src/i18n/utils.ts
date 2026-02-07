import { ui, defaultLang, type Lang } from './ui';

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
 * Get the localized path for a given route.
 * For the default language (en), paths are at root: /projects
 * For other languages, paths are prefixed: /zh/projects
 */
export function getLocalePath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}

/**
 * Get the alternate language
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

/**
 * Get the switch URL for the alternate language
 */
export function getSwitchLangUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const alternateLang = getAlternateLang(lang);

  if (lang === defaultLang) {
    // Currently in English, switch to /zh/...
    return `/${alternateLang}${url.pathname}`;
  } else {
    // Currently in zh, switch to English (remove prefix)
    const pathWithoutLang = url.pathname.replace(`/${lang}`, '') || '/';
    return pathWithoutLang;
  }
}
