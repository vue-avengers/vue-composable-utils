const { name, description } = require('../../package.json');

const Base_URL = 'https://vue-use-embed.netlify.app';

module.exports = {
  title: name,
  description: description,
  editLinks: true,
  editLinkText: 'Edit this page',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'author', content: 'Abdulnasır olcan' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: `${Base_URL}/icons/ms-icon-144x144.png` }],
    ['meta', { name: 'theme-color', content: '#36495e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@VueUseEmbed' }],
    ['meta', { name: 'twitter:creator', content: '@VueUseEmbed' }],
    ['meta', { name: 'twitter:image', content: `${Base_URL}/img/vue-use-embed.png` }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:url', content: Base_URL }],
    ['meta', { property: 'twitter:domain', content: Base_URL }],
    ['meta', { property: 'og:image', content: `${Base_URL}/img/vue-use-embed.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: `${Base_URL}/img/vue-use-embed.png`, color: '#36495e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: `${Base_URL}/icons/apple-icon-57x57.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: `${Base_URL}/icons/apple-icon-60x60.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: `${Base_URL}/img/vue-use-embed.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: `${Base_URL}/icons/apple-icon-76x76.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: `${Base_URL}/icons/apple-icon-114x114.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: `${Base_URL}/icons/apple-icon-120x120.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: `${Base_URL}/icons/apple-icon-144x144.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: `${Base_URL}/icons/apple-icon-152x152.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${Base_URL}/icons/apple-icon-180x180.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${Base_URL}/icons/android-icon-192x192.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${Base_URL}/img/vue-use-embed.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: `${Base_URL}/icons/favicon-96x96.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${Base_URL}/icons/favicon-16x16.png` }],
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['vuepress-plugin-code-copy', true],
    'vuepress-plugin-element-tabs',
  ],
  themeConfig: {
    repo: 'cube-action-team/vue-use-embed',
    docsRepo: 'cube-action-team/vue-use-embed',
    docsDir: 'docs',
    logo: '/img/vue-use-embed.png',
    editLinks: true,
    sidebarDepth: 2,
    nav: [
      {
        text: 'Docs',
        link: '/vue-use-embed/',
      },
    ],
    sidebar: getSidebar(),
  },
};

function getSidebar() {
  return [
    {
      title: 'Vue-use-embed',
      collapsable: false,
      children: [
        {
          title: 'useEmbed',
          path: '/vue-use-embed/useEmbed',
        },
      ],
    },
  ];
}
