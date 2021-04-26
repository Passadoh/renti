import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Container from "../components/container";
import { css } from "@emotion/react";
import PageNotFoundIllustration from "../assets/vectors/page-not-found.svg";
import theme from "../theme/theme";

const NotFoundPage = () => {
  const {
    color: { offWhite },
  } = theme;
  return (
    <Container>
      <SEO
        title="404 - Pagina niet gevonden | probeer het opnieuw ..."
        description="pagina niet gevonden"
        type="website"
        path="/404/"
      />
      <section
        id="section-not-found"
        css={css`
          background-color: ${offWhite};
        `}
      >
        <div
          css={css`
            max-width: 700px;
            margin: 6rem auto;
          `}
        >
          <h1 className="heading-1">Probeer het nog een keer...</h1>
          <p className="paragraph">
            Deze pagina bestaat (niet meer). Keer terug naar{" "}
            <Link className="anchor" to="/">
              {" "}
              onze homepage
            </Link>{" "}
            en probeer het nog een keer.
          </p>
          <div
            css={css`
              & > * {
                max-width: 688px;
              }
            `}
          >
            <PageNotFoundIllustration />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NotFoundPage;
