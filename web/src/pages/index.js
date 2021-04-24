import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";
import HeroSection from "../sections/hero-section";
import AboutSection from "../sections/about-section";
import ServicesSection from "../sections/services-section";
import ClientSection from "../sections/client-section";
import ContactSection from "../sections/contact-section";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    testimonials: allSanityReview(limit: 3) {
      totalCount
      edges {
        node {
          id
          name
          title
          review
          avatar {
            alt
            asset {
              gatsbyImageData(width: 125, height: 125)
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const site = (data || {}).site;
  const testimonials = (data || []).testimonials.edges;
  return (
    <Container>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        type="website"
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientSection testimonials={testimonials} />
      <ContactSection />
    </Container>
  );
};

export default IndexPage;
