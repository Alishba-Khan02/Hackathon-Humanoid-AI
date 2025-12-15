// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Explore the comprehensive course documentation for Physical AI and Humanoid Robotics, covering simulation, real-world deployment, and intelligent interaction.',
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
    // Existing Docusaurus BibTeX plugin placeholder
    // [
    //   '@docusaurus/plugin-content-bibliography',
    //   {
    //     path: 'references', // Path to the directory containing BibTeX files
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
        blog: false, // Disable the blog
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
        {
          to: '/signin',
          label: 'Sign In',
          position: 'right',
        },
        {
          to: '/signup',
          label: 'Sign Up',
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
      copyright: `Copyright © ${new Date().getFullYear()}  AI & Humanoid Robotics Book. Built by Alishba Khan`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;