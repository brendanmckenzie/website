try {
  require("dotenv").config();
} catch {}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.brendanmckenzie.com",
  },

  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./static/assets/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-honegumi",
      options: {
        project: "87a71e8f-e9a9-44e7-9035-f6e4b524d9fe",
        token: "b3lCqJVzQaKr70C/Fpx/MWNz/3i1POcOqaVWHhLE",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-25382310-1"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
