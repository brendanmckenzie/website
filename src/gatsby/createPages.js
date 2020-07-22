const query = `
{
  allHonTaxonomy {
    nodes {
      id
      path
      model
      entryId
    }
  }
}
`;

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const posts = await graphql(query);
  posts.data.allHonTaxonomy.nodes.forEach((node) => {
    try {
      const component = require.resolve(`../templates/${node.model}.tsx`);
      createPage({
        path: node.path,
        component,
        context: {
          entryId: node.entryId,
        },
      });
    } catch (ex) {
      console.warn(
        `error creating page for path '${node.path}' of type '${node.model}'`
      );
      console.warn(ex);
    }
  });
};
