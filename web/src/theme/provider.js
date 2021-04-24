import React from "react";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./theme";
import BASE_STYLE from "./styles/base";
import TYPOGRAPHY from "./styles/typography";

const ThemeProvider = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={BASE_STYLE} />
      <Global styles={TYPOGRAPHY} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
