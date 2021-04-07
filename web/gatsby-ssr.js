/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react";
import ThemeProvider from "./src/theme/provider";

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
