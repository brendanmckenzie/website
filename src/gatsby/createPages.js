const query = `
  query($skip: Int!) {
    honegumi {
      taxonomy(
        skip: $skip
        take: 50
        filter: { path: ["website"] }
      ) {
        nodes {
          id
          path
          entry {
            id
            type
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;

const loadPage = async (graphql, skip) => {
  const results = await graphql(query, { skip });
  if (results.data.honegumi.taxonomy.pageInfo.hasNextPage) {
    return results.data.honegumi.taxonomy.nodes.concat(
      await loadPage(
        graphql,
        skip + results.data.honegumi.taxonomy.nodes.length
      )
    );
  } else {
    return results.data.honegumi.taxonomy.nodes;
  }
};

const loadPages = async (graphql) => await loadPage(graphql, 0);

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const pages = await loadPages(graphql);

  pages
    .filter((node) => node.entry && node.entry.type)
    .forEach((node) => {
      try {
        const component = require.resolve(
          `../templates/${node.entry.type}.tsx`
        );

        createPage({
          path: "/" + node.path.join("/"),
          component,
          context: {
            entryId: node.entry.id,
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
