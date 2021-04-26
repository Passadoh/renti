import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";
import Page from "../components/page";
import toPlainText from "../lib/toPlainText";

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      mainImage {
        alt
        caption
      }
      keywords
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 8 })
      mainImage {
        alt
        asset {
          fixed(height: 1200) {
            src
          }
        }
      }
    }
  }
`;

const PageTemplate = ({ data }) => {
  const { page } = data;
  return (
    <Container>
      <SEO
        title={page.title}
        description={toPlainText(page._rawExcerpt)}
        path={`/p/${page.slug.current}/`}
        type="website"
        image={page.mainImage}
        keywords={page.keywords}
      />
      <Page {...page} />
    </Container>
  );
};

export default PageTemplate;
