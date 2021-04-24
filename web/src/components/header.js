import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import LogoIcon from "../assets/vectors/logo.svg";
import theme from "../theme/theme";
import { css } from "@emotion/react";
import mq from "../lib/media";
import MenuIcon from "../assets/vectors/menu_black_24dp.svg";
import MenuOpenIcon from "../assets/vectors/menu_open_black_24dp.svg";

const NavList = () => {
  const {
    transition,
    color: { offWhite },
  } = theme;
  const MENU_GAP = "1.8rem";

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <input
        type="checkbox"
        id="toggle"
        aria-hidden="true"
        css={css`
          display: none;
          visibility: hidden;

          &:checked ~ nav .nav-list {
            max-height: 500rem;
            padding: 4rem;

            & > li {
              display: block;
              visibility: visible;
            }
          }

          &:checked ~ label .menu-closed {
            opacity: 0;
          }

          &:checked ~ label .menu-open {
            opacity: 1;
          }

          display: block;
          position: absolute;
          right: 2rem;
          top: -2rem;
          width: 48px;
          height: 48px;
        `}
      />
      <label
        htmlFor="toggle"
        aria-hidden="true"
        css={css`
          display: none;
          visibility: hidden;

          ${mq("md")} {
            display: block;
            visibility: visible;
            z-index: 1001;

            & > span {
              position: absolute;
              right: 0;
              transition: opacity ${transition};
            }
          }
          position: absolute;
          right: 2rem;
          top: -2rem;
          cursor: pointer;
        `}
      >
        <span className="menu-closed">
          <MenuIcon />
        </span>
        <span
          className="menu-open"
          css={css`
            opacity: 0;
          `}
        >
          <MenuOpenIcon />
        </span>
      </label>
      <nav
        role="navigation"
        css={css`
          position: relative;
          ${mq("md")} {
            z-index: 1000;
          }
        `}
      >
        <ul
          className="nav-list flexbox"
          css={css`
            flex: 0 1 33%;
            white-space: nowrap;

            ${mq("md")} {
              position: absolute;
              width: 102vw;
              right: -2rem;
              text-align: right;
              top: 2rem;
              flex-direction: column;
              align-items: flex-end;
              background: ${offWhite};
              border-radius: 4px;
              padding-right: 4rem;
              max-height: 1px;
              transition: all 1s cubic-bezier(0.325, 1, 0.22, 1);

              & > li {
                display: none;
                visibility: hidden;
              }
            }

            & > .nav-item:not(:first-of-type) {
              padding-left: ${MENU_GAP};
              ${mq("md")} {
                padding-left: 0;
                margin-top: 1rem;
              }
            }

            & > .nav-item:not(:last-child) {
              padding-right: ${MENU_GAP};
              ${mq("md")} {
                padding-right: 0;
              }
            }
          `}
        >
          <li className="nav-item">
            <AnchorLink className="anchor" to="/#services">
              Onze diensten
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink className="anchor" to="/#clients">
              Klanten
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink className="anchor" to="/#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = ({ sticky }) => {
  const {
    padding: { base, xl, md, sm },
    color: { offWhite },
  } = theme;
  return (
    <header
      className={sticky ? "sticky" : ""}
      css={css`
        background: ${offWhite};
        padding: 9px ${base} 0 ${base};

        ${mq("lg")} {
          padding: 9px ${xl} 0 ${xl};
        }

        ${mq("md")} {
          @keyframes moveDown {
            from {
              transform: translateY(-13rem);
            }
            to {
              transform: translateY(0rem);
            }
          }
          &.sticky {
            position: fixed;
            z-index: 2000;
            animation: moveDown 0.5s ease-in-out;
            box-shadow: 1px 1px 1px #222;
          }
          width: 100%;
          height: 13rem;
          padding: 9px ${md} 0 ${md};
        }

        ${mq("sm")} {
          padding: 9px ${sm} 0 ${sm};
        }
      `}
    >
      <div className="container">
        <div className="flexbox">
          <div
            css={css`
              max-width: 145px;
              z-index: 1001;
            `}
          >
            <AnchorLink to="/#home">
              <LogoIcon />
            </AnchorLink>
          </div>
          <NavList />
        </div>
      </div>
    </header>
  );
};

export default Header;
