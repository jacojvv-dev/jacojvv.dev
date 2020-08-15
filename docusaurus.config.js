module.exports = {
  title: "jacojvv.dev",
  tagline: "At the moment - it's just a blog",
  url: "https://jacojvv-dev.github.io",
  baseUrl: "/jacojvv.dev/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "jacojvv-dev", // Usually your GitHub org/user name.
  projectName: "jacojvv.dev", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "jacojvv.dev",
      // logo: {
      //   alt: "jacojvv.dev Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { to: "blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/jacojvv-dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jaco Jansen van Vuuren. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   // It is recommended to set document id as docs home page (`docs/` path).
        //   homePageId: "doc1",
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/main/website/",
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/jacojvv-dev/jacojvv.dev/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
