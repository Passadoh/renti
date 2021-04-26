import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "gatsby";
import getPageURL from "../lib/getPageURL";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    // eslint-disable-next-line react/display-name
    block: BlockRenderer,
  },
  marks: {
    // eslint-disable-next-line react/display-name
    internalLink: ({ children, mark }) => {
      if (
        mark.reference &&
        mark.reference.slug &&
        mark.reference._type === "page"
      ) {
        return (
          <Link className="anchor" to={getPageURL(mark.reference.slug)}>
            {children}
          </Link>
        );
      } else if (
        mark.reference &&
        mark.reference.slug &&
        mark.reference._type === "author"
      ) {
        return (
          <Link className="anchor" to={"/" + mark.reference.slug.current + "/"}>
            {children}
          </Link>
        );
      }
      return (
        <>
          <mark>{children}</mark>
        </>
      );
    },
    // eslint-disable-next-line react/display-name
    link: ({ mark, children }) => {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer external"
          className="anchor"
          href={mark.href}
        >
          {children}
        </a>
      );
    },
  },
};

export default serializers;
