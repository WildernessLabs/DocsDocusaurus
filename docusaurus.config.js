// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wilderness Labs Developer Portal',
  tagline: 'Wilderness Labs developer documentation and resource site.',
  favicon: 'img/favicon.ico',
  customFields: {
    email: 'hello@wildernesslabs.co',
    twitter_username: 'wildernesslabs',
    github_username: 'wildernesslabs'
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DocsDocusaurus/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WildernessLabs', // Usually your GitHub org/user name.
  projectName: 'DocsDocusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/WildernessLabs/DocsDocusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Wilderness Labs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Developers',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://blog.wildernesslabs.co/',
            label: 'Blog',
            position: 'left',
            external: false,
          },
          {
            href: 'https://github.com/WildernessLabs/Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/wildernesslabs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wildernesslabs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/WildernessLabs',
              },
              {
                label: 'Slack',
                href: 'http://slackinvite.wildernesslabs.co/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'hello@wildernesslabs.co',
                href: 'mailto:hello@wildernesslabs.co',
              },
            ],
          },
          {
            // title: 'Docs',
            items: [
              {
                label: 'Meadow',
                to: '/docs/Meadow/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Terms of Use',
                href: 'https://www.wildernesslabs.co/terms',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.wildernesslabs.co/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wilderness Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
