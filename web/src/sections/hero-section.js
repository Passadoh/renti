import React from "react";
import { css } from "@emotion/react";
import mq from "../lib/media";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import theme from "../theme/theme";
import HeroIllustration from "../assets/vectors/hero-illustration.svg";
import Dots from "../assets/vectors/dots.svg";

const HeroSection = () => {
  const {
    color: { offWhite },
  } = theme;

  return (
    <section
      id="home"
      className="hero-section"
      css={css`
        padding-top: 12vh;
        padding-bottom: 12vh;

        background-color: ${offWhite};
        ${mq("lg")} {
          padding-bottom: 3vh;
          padding-top: 3vh;
        }
      `}
    >
      <div className="container">
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: flex-start;

            & > *:not(:first-of-type) {
              padding-left: 15px;
              ${mq("md")} {
                padding-left: unset;
              }
            }

            & > *:not(:last-child) {
              padding-right: 15px;
              ${mq("md")} {
                padding-right: unset;
              }
            }

            & > * {
              flex: 0 1 50%;

              ${mq("md")} {
                flex: 0 1 100%;
              }
            }
          `}
        >
          <div
            css={css`
              ${mq("md")} {
                text-align: center;
              }
            `}
          >
            <div
              css={css`
                max-width: 530px;
                margin: 0 auto;
              `}
            >
              <h1 className="title">Van A tot Z. Wij doen je boekhouding.</h1>
              <h2
                className="sub-title"
                css={css`
                  padding-top: 2.8rem;
                  padding-bottom: 4.5rem;
                `}
              >
                Beatus sibi videtur esse moriens. Quod totum contra est.
              </h2>
              <AnchorLink
                css={css`
                  margin-bottom: 12vh;
                  ${mq("md")} {
                    margin-bottom: 4.8rem;
                  }
                `}
                className="button"
                to="/#contact"
              >
                Direct Contact
              </AnchorLink>
            </div>
          </div>
          <div>
            <div
              css={css`
                position: relative;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -7.5rem;
                  right: -15.5rem;
                  width: 83rem;

                  & > svg {
                    & > g {
                      -webkit-clip-path: url("clip0");
                    }
                  }

                  ${mq("lg")} {
                    max-width: 63rem;
                    top: 4.5rem;
                    right: -12.5rem;
                  }
                  ${mq("md")} {
                    max-width: 41rem;
                    top: unset;
                    right: unset;
                    position: unset;
                    margin: 0 auto;
                  }
                `}
              >
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              left: -13rem;
              bottom: -18rem;
              width: 409px;
              max-width: 409px;
              ${mq("lg")} {
                bottom: -11rem;
                left: -20rem;
              }
              ${mq("md")} {
                max-width: 307.5px;
                left: -25rem;
              }
            `}
          >
            <Dots />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
