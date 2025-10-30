/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverModuleFormat: "esm",
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverConditions: ["worker"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverPlatform: "neutral",
};
