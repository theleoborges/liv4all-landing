export type NavLink = { href: string; label: string; external?: boolean };

export const mainNavLinks: NavLink[] = [
  { href: '/about', label: 'about' },
  { href: '/faq', label: 'faq' },
  { href: '/guides', label: 'guides' },
];

export const homeNavExtras: NavLink[] = [
  { href: '/#why', label: 'why liv' },
  { href: '/#demos', label: 'demo' },
];

export const footerLinks: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/faq', label: 'faq' },
  { href: '/guides', label: 'guides' },
  { href: '/terms', label: 'terms' },
  { href: '/privacy', label: 'privacy' },
];

export const homeFooterExtras: NavLink[] = [
  { href: '/#origin', label: 'origin story' },
  { href: 'https://liv.leo.wtf', label: 'meet the original liv', external: true },
  { href: 'https://leo.wtf', label: 'leo borges', external: true },
];
