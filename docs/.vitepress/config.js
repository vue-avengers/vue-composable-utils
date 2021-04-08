const { name, description } = require('../../package.json');

module.exports = {
  title: name,
  description: description,
  editLinks: true,
  editLinkText: 'Edit this page',
  head: [["meta", { charset: "utf-8" }],
  [
    "meta",
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  ['meta', { name: 'author', content: 'Abdulnasır olcan' }],
  ["meta", { property: "og:image", content: ".vitepress/assets/img/vue-composable-utils-logo-32.png" }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '.vitepress/assets/img/vue-composable-utils-logo-32.png' }],
  ['link', { rel: 'icon', href: '.vitepress/assets/img/vue-composable-utils-logo-32.png', type: 'image/png' }],
  ['link', { rel: 'icon', href: '.vitepress/assets/img/vue-composable-utils-logo-32.png', type: 'image/svg+xml' }],
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
    logo: '.vitepress/assets/img/vue-composable-utils-logo-72.png',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'edit on GitHub',
        nav: [
          {
            text: 'Composable Utils',
            link: '/vue-composable-utils/',
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
            link: '/vue-composable-utils/',
          },
        ],
        sidebar: getSidebarTR(),
      },
    },
    nav: [
      {
        text: 'Composable Utils',
        link: '/vue-composable-utils/',
      },
    ],
    sidebar: getSidebar(),
  }
};

function getSidebar() {
  return [
    {
      text: 'Composable Utils',
      children: [
        {
          text: 'Bind',
          link: '/vue-composable-utils/bind',
        },
        {
          text: 'Embed',
          link: '/vue-composable-utils/embed',
        },
        {
          text: 'State',
          link: '/vue-composable-utils/state',
        },
        {
          text: 'List',
          link: '/vue-composable-utils/list',
        },
      ],
    },
  ];
}

function getSidebarTR() {
  return [
    {
      text: 'Composable Utils',
      children: [
        {
          text: 'Bind',
          link: '/tr/vue-composable-utils/bind',
        },
        {
          text: 'Embed',
          link: '/tr/vue-composable-utils/embed',
        },
        {
          text: 'State',
          link: '/tr/vue-composable-utils/state',
        },
        {
          text: 'List',
          link: '/tr/vue-composable-utils/list',
        },
      ],
    },
  ];
}
