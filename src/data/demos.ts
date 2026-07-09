import type { Lang } from '../i18n';

export type Demo = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  desc: string;
  videoSrc: string;
};

type DemoCopy = Pick<Demo, 'metaTitle' | 'metaDescription' | 'title' | 'desc'>;
type I18nDemo = {
  slug: string;
  videoSrc: string;
  copy: Record<Lang, DemoCopy>;
};

const demoData: I18nDemo[] = [
  {
    slug: 'daily-briefing',
    videoSrc: '/assets/videos/daily-report.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — Daily AI Briefing',
        metaDescription: 'Ask for a curated daily report on any topic — delivered straight to your inbox.',
        title: 'daily AI briefing',
        desc: 'ask for a curated daily report on any topic — delivered straight to your inbox.',
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Briefing Diário com IA',
        metaDescription: 'Peça um relatório diário curado sobre qualquer assunto — entregue direto na sua caixa de entrada.',
        title: 'briefing diário com IA',
        desc: 'peça um relatório diário curado sobre qualquer assunto — entregue direto na sua caixa de entrada.',
      },
    },
  },
  {
    slug: 'forward-and-forget',
    videoSrc: '/assets/videos/whatsapp-forwarded-invite.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — Forward and Forget',
        metaDescription: "A friend's graduation QR code forwarded on WhatsApp. Liv extracts the details and offers to add it to your calendar.",
        title: 'forward and forget',
        desc: "a friend's graduation QR code forwarded on whatsapp. liv extracts the details and offers to add it to your calendar.",
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Encaminhe e Esqueça',
        metaDescription: 'O QR code de uma formatura encaminhado no WhatsApp. A Liv extrai os detalhes e se oferece para adicionar à sua agenda.',
        title: 'encaminhe e esqueça',
        desc: 'o QR code da formatura de um amigo encaminhado no whatsapp. a liv extrai os detalhes e se oferece para adicionar à sua agenda.',
      },
    },
  },
  {
    slug: 'restaurant-booking',
    videoSrc: '/assets/videos/24york-reservation.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — Book a Restaurant',
        metaDescription: 'Liv finds availability, books via web automation, and adds it to your calendar — all through messaging.',
        title: 'book a restaurant',
        desc: 'liv finds availability, books via web automation, and adds it to your calendar — all through telegram.',
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Reserve um Restaurante',
        metaDescription: 'A Liv encontra disponibilidade, reserva via automação web e adiciona à sua agenda — tudo por mensagem.',
        title: 'reserve um restaurante',
        desc: 'a liv encontra disponibilidade, reserva via automação web e adiciona à sua agenda — tudo pelo telegram.',
      },
    },
  },
  {
    slug: 'user-vaults',
    videoSrc: '/assets/videos/user-vault-demo.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — User Vaults',
        metaDescription: 'Securely store and retrieve information in your personal vault.',
        title: 'user vaults',
        desc: 'securely store and retrieve information in your personal vault — passwords, notes, anything you need liv to remember.',
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Cofres de Usuário',
        metaDescription: 'Guarde e recupere informações com segurança no seu cofre pessoal.',
        title: 'cofres de usuário',
        desc: 'guarde e recupere informações com segurança no seu cofre pessoal — senhas, notas, tudo o que você precisar que a liv lembre.',
      },
    },
  },
  {
    slug: 'web-onboarding',
    videoSrc: '/assets/videos/web-onboarding-demo.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — Web Onboarding',
        metaDescription: 'Get started with Liv in seconds — a seamless web onboarding experience.',
        title: 'web onboarding',
        desc: 'get started with liv in seconds — a seamless onboarding experience right from your browser.',
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Onboarding pela Web',
        metaDescription: 'Comece a usar a Liv em segundos — uma experiência de onboarding fluida pela web.',
        title: 'onboarding pela web',
        desc: 'comece a usar a liv em segundos — uma experiência de onboarding fluida direto do seu navegador.',
      },
    },
  },
  {
    slug: 'whatsapp-linking',
    videoSrc: '/assets/videos/whatsapp-linking.mp4',
    copy: {
      en: {
        metaTitle: 'Liv Demo — WhatsApp Linking',
        metaDescription: "Link Liv to your WhatsApp in seconds — scan a QR code and you're in.",
        title: 'whatsapp linking',
        desc: "link liv to your whatsapp in seconds — scan a QR code and you're in.",
      },
      'pt-br': {
        metaTitle: 'Demo da Liv — Conexão com WhatsApp',
        metaDescription: 'Conecte a Liv ao seu WhatsApp em segundos — escaneie um QR code e pronto.',
        title: 'conexão com whatsapp',
        desc: 'conecte a liv ao seu whatsapp em segundos — escaneie um QR code e pronto.',
      },
    },
  },
];

export const getDemos = (lang: Lang): Demo[] =>
  demoData.map(({ slug, videoSrc, copy }) => ({ slug, videoSrc, ...copy[lang] }));

/** English list, kept for existing imports. */
export const demos: Demo[] = getDemos('en');
