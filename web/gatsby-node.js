/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/p/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions);
  const { createRedirect } = actions;
  createRedirect({
    fromPath: `http://www.${process.env.GATSBY_DOMAIN_NAME}/*`,
    toPath: `https://${process.env.GATSBY_DOMAIN_NAME}/:splat`,
    isPermanent: true,
    force: true,
  });
};
