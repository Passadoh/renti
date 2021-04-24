import React from "react";
import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";
import theme from "../theme/theme";
import mq from "../lib/media";

const Testimonial = ({ testimonial }) => {
  const { name, title, review, avatar } = testimonial;
  const {
    shadow,
    color: { offBlack, primaryDark },
  } = theme;
  return (
    <div
      css={css`
        flex: 0 1 33.33333%;
        padding: 0 1.7rem;
        ${mq("lg")} {
          padding: 0 1.1rem;
        }
        ${mq("md")} {
          flex: 0 1 100%;
          margin-bottom: 4.1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
          background-color: #fff;
          height: 45rem;
          box-shadow: ${shadow};
          max-width: 45rem;
          margin: 0 auto;
          ${mq("lg")} {
            padding: 2rem;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            ${mq("lg")} {
              width: 90px;
              margin: 0 auto;
            }
          `}
        >
          <GatsbyImage
            css={css`
              clip-path: circle(60px at center);
              ${mq("lg")} {
                clip-path: circle(45px at center);
              }
            `}
            image={avatar.asset.gatsbyImageData}
            alt={avatar.alt}
          />
        </div>
        <div
          css={css`
            height: 100%;
          `}
        >
          <blockquote
            css={css`
              color: ${offBlack};
              margin: 1.7rem auto 0 auto;
              max-width: 257px;
              font-style: italic;
              font-weight: 300;
              font-size: 1.6rem;
              text-align: center;
              letter-spacing: 0.05em;
              ${mq("lg")} {
                font-size: 1.49rem;
              }
            `}
          >
            &quot;{review}&quot;
          </blockquote>
        </div>
        <div>
          <cite
            css={css`
              font-style: normal;
              font-weight: normal;
              font-size: 1.6rem;
              line-height: 132.1%;
              text-align: center;
              letter-spacing: 0.03em;
              ${mq("lg")} {
                font-size: 1.4rem;
              }
              &::before {
                content: "";
                display: block;
                margin: 1.7rem auto;
                width: 70%;
                height: 2px;
                background-color: ${primaryDark};
              }
            `}
          >
            <div>{name}</div>
            <div
              css={css`
                font-weight: 300;
              `}
            >
              {title}
            </div>
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
