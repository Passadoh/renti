import React from "react";
import theme from "../theme/theme";
import { css } from "@emotion/react";
import Testimonial from "../components/testimonial";
import mq from "../lib/media";

const ClientSection = ({ testimonials }) => {
  const {
    color: { backgroundAlt },
  } = theme;
  return (
    <section
      id="clients"
      css={css`
        background-color: ${backgroundAlt};
      `}
    >
      <div className="container">
        <h2 className="heading-2">Wat zeggen klanten over Renti?</h2>
        <div
          className="flexbox"
          css={css`
            flex-wrap: wrap;
            margin: 8.4rem -1.7rem 0 -1.7rem;

            ${mq("lg")} {
              margin: 8.4rem -1.1rem 0 -1.1rem;
              }
            }
          `}
        >
          {testimonials.map(({ node }) => (
            <Testimonial key={node.id} testimonial={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
