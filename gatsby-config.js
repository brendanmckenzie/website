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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Hon",
        fieldName: "honegumi",
        refetchInterval: 300,
        url: process.env.HON_URL,
        headers: {
          "X-Token": process.env.HON_TOKEN,
        },
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
