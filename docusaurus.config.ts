import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ESC Docs',
  tagline: 'Documentation for the Engineering Student Committee',
  favicon: 'img/esc-white.svg',
  // TODO: Set the production url here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'esc-chula',
  projectName: 'esc-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'ESC67',
              path: '/',
            },
            'esc-66': {
              label: 'ESC66',
              path: 'esc-66',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'ESC Logo',
        src: 'img/esc-black.svg',
        srcDark: 'img/esc-white.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/esc-chula/esc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexBlog: false,
        hashed: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
};

export default config;
