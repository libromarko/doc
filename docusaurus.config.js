// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'libromarko',
  tagline: 'Documentation',
  url: 'https://doc.libromarko.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'libromarko', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/libromarko/doc/tree/main/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'doc.libromarko',
        logo: {
          alt: 'libromarko Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/libromarko',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'libromarko',
            items: [
              {
                label: 'libromarko',
                href: 'https://libromarko.xyz',
              },
              {
                label: 'Chrome Web Store',
                href: 'https://chrome.google.com/webstore/detail/libromarko/jpbjepefiibjgekgaloekkfbjciigcfg',
              },
              {
                label: 'Firefox Add-on',
                href: 'https://addons.mozilla.org/en-US/firefox/addon/libromarko/'
              },
              {
                label: 'Google Play Store',
                href: 'https://play.google.com/store/apps/details?id=xyz.libromarko.app'
              },
              {
                label: 'status',
                href: 'https://status.libromarko.xyz/status/libromarko',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'How to use - web',
                to: '/docs/category/how-to-use---web'
              },
              {
                label: 'How to use - app',
                to: '/docs/category/how-to-use---app'
              },
              {
                label: 'How to use - extension',
                to: '/docs/category/how-to-use---extension'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/libromarko',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} libromarko`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
