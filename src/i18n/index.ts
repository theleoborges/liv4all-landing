export type Lang = 'en' | 'pt-br';

export const DEFAULT_LANG: Lang = 'en';
export const LANGS: Lang[] = ['en', 'pt-br'];

/** hreflang / html lang attribute values per locale. */
export const LANG_TAGS: Record<Lang, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
};

export const OG_LOCALES: Record<Lang, string> = {
  en: 'en_US',
  'pt-br': 'pt_BR',
};

/**
 * Routes (in their unprefixed English form, no trailing slash, '/' for home)
 * that exist in both languages. Everything else — terms, privacy, RSS — is
 * English-only.
 */
export const TRANSLATED_ROUTES = [
  '/',
  '/about',
  '/answers',
  '/articles',
  '/faq',
  '/faq/whatsapp',
  '/guides',
  '/guides/whatsapp-onboarding',
  '/ivy',
  '/pricing',
  '/security',
  '/survey',
  '/trust',
];

/**
 * Route prefixes whose children all exist in both languages (content
 * collections + generated demo pages). Every entry under these gets a pt-br
 * counterpart at build time, so links and the language toggle can localise
 * them without a static list.
 */
export const TRANSLATED_PREFIXES = ['/answers/', '/articles/', '/demo/'];

/** Normalise a pathname to its unprefixed English route form. */
export function toEnglishRoute(pathname: string): string {
  const stripped = pathname.replace(/^\/pt-br(?=\/|$)/, '');
  const noTrailing = stripped.replace(/\/+$/, '');
  return noTrailing === '' ? '/' : noTrailing;
}

export function getLangFromUrl(url: URL): Lang {
  return /^\/pt-br(\/|$)/.test(url.pathname) ? 'pt-br' : 'en';
}

function hasTranslation(englishRoute: string): boolean {
  return (
    TRANSLATED_ROUTES.includes(englishRoute) ||
    TRANSLATED_PREFIXES.some((p) => englishRoute.startsWith(p))
  );
}

export function isTranslatedRoute(pathname: string): boolean {
  return hasTranslation(toEnglishRoute(pathname));
}

/**
 * Localise an internal link given in English form (e.g. '/faq', '/#demos').
 * Routes without a Portuguese counterpart are returned untouched, so
 * English-only content keeps working from Portuguese pages.
 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'en' || /^[a-z]+:/.test(path)) return path;
  const [route, hash] = path.split('#');
  const base = toEnglishRoute(route || '/');
  if (!hasTranslation(base)) return path;
  const localized = base === '/' ? '/pt-br/' : `/pt-br${base}`;
  return hash !== undefined ? `${localized}#${hash}` : localized;
}

/**
 * URL the language toggle should point at from the current page. Pages with
 * no counterpart in the target language fall back to that language's home.
 */
export function alternateUrl(pathname: string, targetLang: Lang): string {
  const base = toEnglishRoute(pathname);
  if (targetLang === 'en') return base;
  return hasTranslation(base) ? localizePath(base, 'pt-br') : '/pt-br/';
}

/** Absolute canonical URL for a translated route in a given language. */
export function canonicalUrl(englishRoute: string, lang: Lang): string {
  const path = localizePath(englishRoute, lang);
  return `https://liv4all.com${path === '/' ? '/' : path}`;
}

/**
 * Content-collection conventions: Portuguese entries live in a `pt-br/`
 * subfolder of the same collection (e.g. `src/content/answers/pt-br/<slug>.mdx`),
 * so their ids carry a `pt-br/` prefix.
 */
export function entryLang(id: string): Lang {
  return id.startsWith('pt-br/') ? 'pt-br' : 'en';
}

/** Collection entry id without the language folder prefix. */
export function entrySlug(id: string): string {
  return id.replace(/^pt-br\//, '');
}

/** Shared chrome strings (nav, footer). */
export const ui = {
  en: {
    login: 'Login',
    startTrial: 'Start Trial',
    footerTagline: 'built with 🖤 by liv & leo',
    langToggleLabel: 'Mudar para Português',
  },
  'pt-br': {
    login: 'Entrar',
    startTrial: 'Iniciar Teste',
    footerTagline: 'feito com 🖤 por liv & leo',
    langToggleLabel: 'Switch to English',
  },
} satisfies Record<Lang, Record<string, string>>;
