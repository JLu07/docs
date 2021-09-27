const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'DeepGo Docs',
  tagline: 'DeepGo',
  url: 'https://DeepGoLab.github.io/docs',
  baseUrl: '/docs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DeepGoLab', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DeepGoLab/docs/edit/master/',
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
        title: 'DeepGo',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          href: "https://DeepGoLab.github.io/docs/"
        },
        items: [
          {
            to: 'docs/',
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/DeepGoOfficial',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DeepGoOfficial',
              },
              {
                label: 'Medium',
                href: 'https://deepgo-official.medium.com'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Deepgo',
                href: 'https://deepgo.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DeepGoLab',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeepGo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    i18n: {
      defaultLocale: "en",
      locales: ["en", "zh"],
      localeConfigs: {
        en: {
          label: "English",
        },
        zh: {
          label: "中文",
        }
      }
    }
});
