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
        project: process.env.HON_PROJECT,
        environment: process.env.HON_ENVIRONMENT,
        token: process.env.HON_TOKEN,
        taxonomy: {
          skip: 2,
          resolveComponent: (input) =>
            require.resolve(`./src/templates/${input.model}.tsx`),
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
