export type NavLink = { href: string; label: string; external?: boolean };
export type NavGroup = { label: string; links: NavLink[] };
export type NavItem = NavLink | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup =>
  (item as NavGroup).links !== undefined;

export const resourcesGroup: NavGroup = {
  label: 'resources',
  links: [
    { href: '/articles', label: 'articles' },
    { href: '/#demos', label: 'demo' },
    { href: '/faq', label: 'faq' },
    { href: '/guides', label: 'guides' },
    { href: '/trust', label: 'trust & safety' },
  ],
};

export const mainNavItems: NavItem[] = [
  { href: '/#why', label: 'why liv' },
  { href: '/pricing', label: 'pricing' },
  resourcesGroup,
  { href: '/about', label: 'about' },
];

export const footerLinks: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/pricing', label: 'pricing' },
  { href: '/faq', label: 'faq' },
  { href: '/articles', label: 'articles' },
  { href: '/guides', label: 'guides' },
  { href: '/terms', label: 'terms' },
  { href: '/privacy', label: 'privacy' },
];

export const homeFooterExtras: NavLink[] = [
  { href: '/#origin', label: 'origin story' },
  { href: 'https://liv.leo.wtf', label: 'meet the original liv', external: true },
  { href: 'https://leo.wtf', label: 'leo borges', external: true },
];
