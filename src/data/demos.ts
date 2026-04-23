export type Demo = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  desc: string;
  videoSrc: string;
};

export const demos: Demo[] = [
  {
    slug: 'daily-briefing',
    metaTitle: 'Liv Demo — Daily AI Briefing',
    metaDescription: 'Ask for a curated daily report on any topic — delivered straight to your inbox.',
    title: 'daily AI briefing',
    desc: 'ask for a curated daily report on any topic — delivered straight to your inbox.',
    videoSrc: '/assets/videos/daily-report.mp4',
  },
  {
    slug: 'forward-and-forget',
    metaTitle: 'Liv Demo — Forward and Forget',
    metaDescription: "A friend's graduation QR code forwarded on WhatsApp. Liv extracts the details and offers to add it to your calendar.",
    title: 'forward and forget',
    desc: "a friend's graduation QR code forwarded on whatsapp. liv extracts the details and offers to add it to your calendar.",
    videoSrc: '/assets/videos/whatsapp-forwarded-invite.mp4',
  },
  {
    slug: 'restaurant-booking',
    metaTitle: 'Liv Demo — Book a Restaurant',
    metaDescription: 'Liv finds availability, books via web automation, and adds it to your calendar — all through messaging.',
    title: 'book a restaurant',
    desc: 'liv finds availability, books via web automation, and adds it to your calendar — all through telegram.',
    videoSrc: '/assets/videos/24york-reservation.mp4',
  },
  {
    slug: 'user-vaults',
    metaTitle: 'Liv Demo — User Vaults',
    metaDescription: 'Securely store and retrieve information in your personal vault.',
    title: 'user vaults',
    desc: 'securely store and retrieve information in your personal vault — passwords, notes, anything you need liv to remember.',
    videoSrc: '/assets/videos/user-vault-demo.mp4',
  },
  {
    slug: 'web-onboarding',
    metaTitle: 'Liv Demo — Web Onboarding',
    metaDescription: 'Get started with Liv in seconds — a seamless web onboarding experience.',
    title: 'web onboarding',
    desc: 'get started with liv in seconds — a seamless onboarding experience right from your browser.',
    videoSrc: '/assets/videos/web-onboarding-demo.mp4',
  },
  {
    slug: 'whatsapp-linking',
    metaTitle: 'Liv Demo — WhatsApp Linking',
    metaDescription: "Link Liv to your WhatsApp in seconds — scan a QR code and you're in.",
    title: 'whatsapp linking',
    desc: "link liv to your whatsapp in seconds — scan a QR code and you're in.",
    videoSrc: '/assets/videos/whatsapp-linking.mp4',
  },
];
