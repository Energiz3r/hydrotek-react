import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles, ThemeName, ThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeName.dark}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ThemeProvider>
  </React.StrictMode>
);
