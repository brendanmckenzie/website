const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  createResolvers({
    Hon_Media: {
      file: {
        type: "File",
        resolve: async (source) => {
          if (!source.url) {
            return null;
          }

          return await createRemoteFileNode({
            url: encodeURI(source.url),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};
