import React from "react";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import theme from "../theme/theme";

const AboutSection = () => {
  const {
    color: { backgroundAlt },
  } = theme;
  return (
    <section
      id="about"
      css={css`
        background-color: ${backgroundAlt};
        padding-top: 18rem;
      `}
    >
      <div className="container">
        <div
          css={css`
            margin: 0 auto;

            max-width: 1003px;
            text-align: center;
          `}
        >
          <h2 className="heading-2">
            Aangenaam, wij zijn twee professionals met ervaring in alle facetten
            van het boekhouden. Wat kunnen we voor jou betekenen?
          </h2>
        </div>
        <StaticImage
          css={css`
            margin-top: 6rem;
          `}
          src="../assets/img/us.png"
          alt="rene en tineke renti.nu"
          placeholder="blurred"
          layout="constrained"
          width={1243}
        />
      </div>
    </section>
  );
};

export default AboutSection;
