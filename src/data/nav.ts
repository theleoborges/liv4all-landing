import { localizePath, type Lang } from '../i18n';

export type NavLink = { href: string; label: string; external?: boolean };
export type NavGroup = { label: string; links: NavLink[] };
export type NavItem = NavLink | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  (item as NavGroup).links !== undefined;

// Source-of-truth definitions carry a label per language; hrefs are written in
// their English (unprefixed) form and localised per-language below.
type I18nLabel = Record<Lang, string>;
type I18nLink = { href: string; label: I18nLabel; external?: boolean };
type I18nGroup = { label: I18nLabel; links: I18nLink[] };
type I18nItem = I18nLink | I18nGroup;

const isI18nGroup = (item: I18nItem): item is I18nGroup =>
  (item as I18nGroup).links !== undefined;

const solutionsGroup: I18nGroup = {
  label: { en: 'Solutions', 'pt-br': 'Soluções' },
  links: [
    { href: '/', label: { en: 'Liv', 'pt-br': 'Liv' } },
    { href: '/ivy', label: { en: 'Ivy', 'pt-br': 'Ivy' } },
  ],
};

const resourcesGroup: I18nGroup = {
  label: { en: 'Resources', 'pt-br': 'Recursos' },
  links: [
    { href: '/articles', label: { en: 'Articles', 'pt-br': 'Artigos' } },
    { href: '/#demos', label: { en: 'Demo', 'pt-br': 'Demos' } },
    { href: '/faq', label: { en: 'FAQ', 'pt-br': 'FAQ' } },
    { href: '/faq/whatsapp', label: { en: 'WhatsApp FAQ', 'pt-br': 'FAQ do WhatsApp' } },
    { href: '/guides', label: { en: 'Guides', 'pt-br': 'Guias' } },
    { href: '/trust', label: { en: 'Trust & Safety', 'pt-br': 'Confiança e Segurança' } },
  ],
};

const mainItems: I18nItem[] = [
  solutionsGroup,
  { href: '/pricing', label: { en: 'Pricing', 'pt-br': 'Preços' } },
  resourcesGroup,
  { href: '/about', label: { en: 'About', 'pt-br': 'Sobre' } },
];

const footerItems: I18nLink[] = [
  { href: '/', label: { en: 'Home', 'pt-br': 'Início' } },
  { href: '/about', label: { en: 'About', 'pt-br': 'Sobre' } },
  { href: '/ivy', label: { en: 'Ivy', 'pt-br': 'Ivy' } },
  { href: '/pricing', label: { en: 'Pricing', 'pt-br': 'Preços' } },
  { href: '/faq', label: { en: 'FAQ', 'pt-br': 'FAQ' } },
  { href: '/faq/whatsapp', label: { en: 'WhatsApp FAQ', 'pt-br': 'FAQ do WhatsApp' } },
  { href: '/articles', label: { en: 'Articles', 'pt-br': 'Artigos' } },
  { href: '/guides', label: { en: 'Guides', 'pt-br': 'Guias' } },
  { href: '/trust', label: { en: 'Trust & Safety', 'pt-br': 'Confiança e Segurança' } },
  { href: '/terms', label: { en: 'Terms', 'pt-br': 'Termos' } },
  { href: '/privacy', label: { en: 'Privacy', 'pt-br': 'Privacidade' } },
];

const homeFooterExtraItems: I18nLink[] = [
  { href: '/#origin', label: { en: 'Origin Story', 'pt-br': 'Nossa História' } },
  { href: 'https://liv.leo.wtf', label: { en: 'Meet the Original Liv', 'pt-br': 'Conheça a Liv Original' }, external: true },
  { href: 'https://leo.wtf', label: { en: 'Leo Borges', 'pt-br': 'Leo Borges' }, external: true },
];

const resolveLink = (link: I18nLink, lang: Lang): NavLink => ({
  href: link.external ? link.href : localizePath(link.href, lang),
  label: link.label[lang],
  ...(link.external ? { external: true } : {}),
});

export const getMainNavItems = (lang: Lang): NavItem[] =>
  mainItems.map((item) =>
    isI18nGroup(item)
      ? { label: item.label[lang], links: item.links.map((l) => resolveLink(l, lang)) }
      : resolveLink(item, lang)
  );

export const getFooterLinks = (lang: Lang): NavLink[] =>
  footerItems.map((l) => resolveLink(l, lang));

export const getHomeFooterExtras = (lang: Lang): NavLink[] =>
  homeFooterExtraItems.map((l) => resolveLink(l, lang));
