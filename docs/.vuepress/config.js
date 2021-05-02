const { name, description } = require('../../package.json');

const Base_URL = 'https://vue-composable-utils.netlify.app';

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
    ['meta', { name: 'twitter:site', content: '@VueComposableUtils' }],
    ['meta', { name: 'twitter:creator', content: '@VueComposableUtils' }],
    ['meta', { name: 'twitter:image', content: `${Base_URL}/img/vue-composable-utils-bg.png` }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:url', content: Base_URL }],
    ['meta', { property: 'twitter:domain', content: Base_URL }],
    ['meta', { property: 'og:image', content: `${Base_URL}/img/vue-composable-utils-logo-32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: `${Base_URL}/img/vue-composable-utils-logo-72.png`, color: '#36495e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: `${Base_URL}/icons/apple-icon-57x57.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: `${Base_URL}/icons/apple-icon-60x60.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: `${Base_URL}/img/vue-composable-utils-logo-72.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: `${Base_URL}/icons/apple-icon-76x76.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: `${Base_URL}/icons/apple-icon-114x114.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: `${Base_URL}/icons/apple-icon-120x120.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: `${Base_URL}/icons/apple-icon-144x144.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: `${Base_URL}/icons/apple-icon-152x152.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${Base_URL}/icons/apple-icon-180x180.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${Base_URL}/icons/android-icon-192x192.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${Base_URL}/img/vue-composable-utils-logo-32.png` }],
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
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Composable Utils',
      description: 'Vue Composable Utils Functions',
    },
    '/tr/': {
      lang: 'tr-Tr',
      title: 'Vue Composable Utils',
      description: 'Vue Composable Fonksiyonlar',
    },
  },
  themeConfig: {
    repo: 'cube-action-team/vue-composable-utils',
    docsRepo: 'cube-action-team/vue-composable-utils',
    docsDir: 'docs',
    logo: '/img/vue-composable-utils-logo-72.png',
    editLinks: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'edit on GitHub',
        nav: [
          {
            text: 'Composable Utils',
            link: '/composable-utils/',
          },
        ],
      },
      '/tr/': {
        label: 'Türkçe',
        selectText: 'Diller',
        editLinkText: 'edit on GitHub',
        nav: [
          {
            text: 'Composable Utils',
            link: '/composable-utils/',
          },
        ],
        sidebar: getSidebarTR(),
      },
    },
    nav: [
      {
        text: 'Composable Utils',
        link: '/composable-utils/',
      },
    ],
    sidebar: getSidebar(),
  },
};

function getSidebar() {
  return [
    {
      title: 'Composable Utils',
      collapsable: false,
      children: [
        {
          title: 'useBind',
          path: '/composable-utils/useBind',
        },
        {
          title: 'useDebounce',
          path: '/composable-utils/useDebounce',
        },
        {
          title: 'useDebounceFn',
          path: '/composable-utils/useDebounceFn',
        },
        {
          title: 'useEmbed',
          path: '/composable-utils/useEmbed',
        },
        {
          title: 'usePick',
          path: '/composable-utils/usePick',
        },
        {
          title: 'useResize',
          path: '/composable-utils/useResize',
        },
        {
          title: 'useList',
          path: '/composable-utils/useList',
        },
        {
          title: 'useLocalStorage',
          path: '/composable-utils/useLocalStorage',
        },
        {
          title: 'useState',
          path: '/composable-utils/useState',
        },
        {
          title: 'useQueue',
          path: '/composable-utils/useQueue',
        },
        {
          title: 'useModal',
          path: '/composable-utils/useModal',
        },
        {
          title: 'useDarkMode',
          path: '/composable-utils/useDarkMode',
        },
        {
          title: 'useStringCase',
          path: '/composable-utils/useStringCase',
        },
        {
          title: 'useDate',
          path: '/composable-utils/useDate',
        },
        {
          title: 'usei18nDate',
          path: '/composable-utils/usei18nDate',
        },
        {
          title: 'useCookie',
          path: '/composable-utils/useCookie',
        },
        {
          title: 'useClipboard',
          path: '/composable-utils/useClipboard',
        },
      ],
    },
  ];
}

function getSidebarTR() {
  return [
    {
      title: 'Composable Utils',
      collapsable: false,
      children: [
        {
          title: 'useBind',
          path: '/tr/composable-utils/useBind',
        },
        {
          title: 'useDebounce',
          path: '/tr/composable-utils/useDebounce',
        },
        {
          title: 'useDebounceFn',
          path: '/tr/composable-utils/useDebounceFn',
        },
        {
          title: 'useEmbed',
          path: '/tr/composable-utils/useEmbed',
        },
        {
          title: 'usePick',
          path: '/tr/composable-utils/usePick',
        },
        {
          title: 'useResize',
          path: '/tr/composable-utils/useResize',
        },
        {
          title: 'useList',
          path: '/tr/composable-utils/useList',
        },
        {
          title: 'useLocalStorage',
          path: '/tr/composable-utils/useLocalStorage',
        },
        {
          title: 'useState',
          path: '/tr/composable-utils/useState',
        },
        {
          title: 'useQueue',
          path: '/tr/composable-utils/useQueue',
        },
        {
          title: 'useModal',
          path: '/tr/composable-utils/useModal',
        },
        {
          title: 'useDarkMode',
          path: '/tr/composable-utils/useDarkMode',
        },
        {
          title: 'useStringCase',
          path: '/tr/composable-utils/useStringCase',
        },
        {
          title: 'useDate',
          path: '/tr/composable-utils/useDate',
        },
        {
          title: 'usei18nDate',
          path: '/tr/composable-utils/usei18nDate',
        },
        {
          title: 'useClipboard',
          path: '/tr/composable-utils/useClipboard',
        },
      ],
    },
  ];
}
