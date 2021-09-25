const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    domains: ["cdn.pokko.io"],
  },
  i18n: {
    locales: ["en-AU"],
    defaultLocale: "en-AU",
  },
};

module.exports = withVanillaExtract(nextConfig);
