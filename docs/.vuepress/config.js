const { name, description } = require('../../package.json');

module.exports = {
  title: name,
  description: description,
  editLinks: true,
  editLinkText: 'Edit this page',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'author', content: 'Abdulnasır olcan' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#36495e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:image', content: '/img/vue-composable-utils-logo-32.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/img/vue-composable-utils-logo-72.png', color: '#36495e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }]
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "vue-composable-utils",
      description: "Vue composable utils functions",
    },
    '/tr/': {
      lang: "tr-Tr",
      title: "vue-composable-utils",
      description: "Vue composable fonksiyonlar",
    }
  },
  themeConfig: {
    repo: 'test/vue-composable-utils',
    docsRepo: "test/vue-composable-utils",
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
  }
};

function getSidebar() {
  return [
    {
      title: 'Composable Utils',
      collapsable: false,
      children: [
        {
          title: 'Bind',
          path: '/composable-utils/bind',
        },
        {
          title: 'Debounce',
          path: '/composable-utils/debounce',
        },
        {
          title: 'Embed',
          path: '/composable-utils/embed',
        },
        {
          title: 'List',
          path: '/composable-utils/list',
        },
        {
          title: 'LocalStorage',
          path: '/composable-utils/localStorage',
        },
        {
          title: 'State',
          path: '/composable-utils/state',
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
          title: 'Bind',
          path: '/tr/composable-utils/bind',
        },
        {
          title: 'Debounce',
          path: '/tr/composable-utils/debounce',
        },
        {
          title: 'Embed',
          path: '/tr/composable-utils/embed',
        },
        {
          title: 'List',
          path: '/tr/composable-utils/list',
        },
        {
          title: 'LocalStorage',
          path: '/tr/composable-utils/localStorage',
        },
        {
          title: 'State',
          path: '/tr/composable-utils/state',
        },
      ],
    },
  ];
}
