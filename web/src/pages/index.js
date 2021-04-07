import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = ({ data }) => {
  const site = (data || {}).site;

  return (
    <Container>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        type="website"
        path="/"
      />
      Index Page
    </Container>
  );
};

export default IndexPage;
