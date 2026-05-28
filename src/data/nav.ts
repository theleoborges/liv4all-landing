export type NavLink = { href: string; label: string; external?: boolean };
export type NavGroup = { label: string; links: NavLink[] };
export type NavItem = NavLink | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  (item as NavGroup).links !== undefined;

export const solutionsGroup: NavGroup = {
  label: 'Solutions',
  links: [
    { href: '/', label: 'Liv' },
    { href: '/ivy', label: 'Ivy' },
  ],
};

export const resourcesGroup: NavGroup = {
  label: 'Resources',
  links: [
    { href: '/articles', label: 'Articles' },
    { href: '/#demos', label: 'Demo' },
    { href: '/faq', label: 'FAQ' },
    { href: '/faq/whatsapp', label: 'WhatsApp FAQ' },
    { href: '/guides', label: 'Guides' },
    { href: '/trust', label: 'Trust & Safety' },
  ],
};

export const mainNavItems: NavItem[] = [
  solutionsGroup,
  { href: '/pricing', label: 'Pricing' },
  resourcesGroup,
  { href: '/about', label: 'About' },
];

export const footerLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ivy', label: 'Ivy' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/faq/whatsapp', label: 'WhatsApp FAQ' },
  { href: '/articles', label: 'Articles' },
  { href: '/guides', label: 'Guides' },
  { href: '/trust', label: 'Trust & Safety' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
];

export const homeFooterExtras: NavLink[] = [
  { href: '/#origin', label: 'Origin Story' },
  { href: 'https://liv.leo.wtf', label: 'Meet the Original Liv', external: true },
  { href: 'https://leo.wtf', label: 'Leo Borges', external: true },
];
