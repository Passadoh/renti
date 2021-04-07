import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "./layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Container = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return <Layout {...props} siteTitle={data.site.title} />;
      }}
    />
  );
};

export default Container;
