/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  // appDirectory: "app",

  // browserBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildDirectory: "api/build"
  serverModuleFormat: "cjs",
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    // v2_routeConvention: true,
  },
};
