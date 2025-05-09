// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prefab Documentation",
  tagline: "API Docs for Prefab",
  url: "https://docs.prefab.cloud",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_zbGOXnt4C5OR1aKcUFyH5DgA4N0h5wOsWIsPeAuu24B",
        appUrl: "https://pwh.prefab.cloud", // optional
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "prefab-cloud", // Usually your GitHub org/user name.
  projectName: "prefab-cloud-docs-web", // Usually your repo name.

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      type: "text/javascript",
      id: "hs-script-loader",
      async: true,
      defer: true,
      src: "//js.hs-scripts.com/465416.js",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CB91P8FVG3",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Prefab Logo",
          src: "img/logo.svg",
          href: "https://www.prefab.cloud/",
        },
        items: [
          {
            to: "/",
            position: "right",
            label: "Prefab Docs Home",
            className: "text-white", // workaround for the fact that docusuarus wants to always treat this link as active
          },
          {
            type: "custom-NavbarCta",
            position: "right",
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/tutorials/get-started/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/prefab",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/prefabcloud",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/prefab-cloud",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prefab Inc. Built with Docusaurus.`,
      },
      mermaid: {
        theme: { light: "base", dark: "base" },
        options: {
          theme: "base",
          themeVariables: {
            primaryColor: "#B9CBFB",
            lineColor: "#2962F5",
            tertiaryColor: "#E8EEFF",
          },
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "ruby", "python"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "I4HO5HDPCF",

        // Public API key: it is safe to commit it
        apiKey: "87ede72da4894c07f96fdd252feb2024",

        indexName: "prefab",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params

        // insights: true, // Optional, automatically send insights when user interacts with search results

        // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###'

        // debug: false // Set debug to true if you want to inspect the modal
      },
    }),
};

module.exports = config;
