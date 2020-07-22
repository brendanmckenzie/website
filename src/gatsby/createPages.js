const query = `
query {
  allHonBlogPost {
    nodes {
      id
      alias
      date
    }
  }
}
`;

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const posts = await graphql(query);
  posts.data.allHonBlogPost.nodes.forEach((node) => {
    try {
      const component = require.resolve(`../templates/BlogPost.tsx`);
      createPage({
        path: "/posts/" + [node.date.substr(0, 4), node.alias].join("/"),
        component,
        context: {
          entryId: node.id,
        },
      });
    } catch (ex) {
      console.warn(
        `error creating page for path '${node.path.join("/")}' of type '${
          node.entry.type
        }'`
      );
      console.warn(ex);
    }
  });
};
