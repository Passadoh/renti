import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import LogoDark from "../assets/vectors/logo-dark.svg";
import theme from "../theme/theme";
import mq from "../lib/media";

const Footer = () => {
  const {
    color: { primaryLight },
  } = theme;
  return (
    <footer
      id="footer"
      css={css`
        background-color: ${primaryLight};
        padding-bottom: 3.5rem;
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
                margin-bottom: 3rem;
                padding-left: 0;
              }
            }

            & > *:not(:last-child) {
              padding-right: 15px;
              ${mq("md")} {
                margin-bottom: 3rem;

                padding-right: 0;
              }
            }

            & > * {
              flex: 0 1 33%;
              ${mq("md")} {
                flex: 0 1 100%;
              }
            }
          `}
        >
          <div>
            <LogoDark />
            <div
              css={css`
                font-weight: 300;
                font-size: 1.6rem;
              `}
            >
              Van A tot Z. Wij doen je boekhouding.
            </div>
          </div>
          <div>
            <h3 className="heading-3">Informatie</h3>
            <ul>
              <li>
                <AnchorLink className="anchor" to="/#about">
                  Over ons
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="anchor" to="/#services">
                  Dienstverlening
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="anchor" to="/#clients">
                  Klanten
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="anchor" to="/#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="heading-3">Voorwaarden</h3>
            <ul>
              <li>
                <Link className="anchor" to="/p/terms/">
                  Algemene Voorwaarden
                </Link>
              </li>
              <li>
                <Link className="anchor" to="/p/privacy/">
                  Privacy beleid
                </Link>
              </li>
              <li>
                <p
                  css={css`
                    font-size: 1.6rem;
                  `}
                >
                  KVK: 1298312987
                </p>
              </li>
              <li>
                <p
                  css={css`
                    font-size: 1.6rem;
                  `}
                >
                  BTW: 1298312987
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: flex-start;
            font-size: 1.4rem;
            margin-top: 14rem;
            ${mq("md")} {
              margin-top: 7rem;
            }

            & > *:not(:first-of-type) {
              padding-left: 15px;
              ${mq("md")} {
                padding-left: 0;
              }
            }

            & > *:not(:last-child) {
              padding-right: 15px;
              ${mq("md")} {
                padding-right: 0;
              }
            }

            & > * {
              flex: 0 1 33%;
              ${mq("md")} {
                flex: 0 1 100%;
              }
            }
          `}
        >
          <div>© 2021 Renti. Alle rechten voorbehouden.</div>
          <div>
            Webdesign:{" "}
            <a
              css={css`
                font-size: 1.4rem !important;
              `}
              target="_blank noreferrer"
              className="anchor"
              href="https://franksblog.nl/about/"
            >
              FdV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
