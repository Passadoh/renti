import React from "react";
import Header from "./header";
import Footer from "./footer";
import useSticky from "../lib/useSticky";
import { css } from "@emotion/react";

const Layout = ({ children }) => {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Header sticky={isSticky} />
      <main
        ref={element}
        css={css`
          min-height: 80vh;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
