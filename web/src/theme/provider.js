import React from "react";
import {
  Global,
  css,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";

import theme from "./theme";

const ThemeProvider = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global
        styles={css`
          "*,*::after,*::before" {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
