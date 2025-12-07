import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Empowering the next generation of Physical AI and Humanoid Robotics developers.',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-organization', // Usually your GitHub org/user name.
  projectName: 'your-github-repo', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    // Placeholder for a Docusaurus BibTeX plugin.
    // A dedicated plugin (e.g., '@docusaurus/plugin-content-bibliography')
    // needs to be developed or a community solution found to properly
    // integrate BibTeX files and render citations.
    // For now, this entry serves as a configuration intention.
    // [
    //   '@docusaurus/plugin-content-bibliography',
    //   {
    //     path: 'references', // Path to the directory containing BibTeX files
    //     // other options here
    //   },
    // ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-github-organization/your-github-repo/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-github-organization/your-github-repo/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics Book',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Course Documentation Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Modules',
        },
        {
          href: 'https://github.com/your-github-organization/your-github-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // Adding search functionality via Algolia
    algolia: {
      appId: 'YOUR_APP_ID', // Replace with your Algolia Application ID
      apiKey: 'YOUR_SEARCH_API_KEY', // Replace with your Algolia Search API Key
      indexName: 'YOUR_INDEX_NAME', // Replace with your Algolia Index Name
      contextualSearch: true,
      // Optional: Specify search parameters
      searchParameters: {},
    },
    footer: {
      style: 'dark',
      links: [
     
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  AI & Humanoid Robotics Book. Built with Alishba Khan`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
