import { useState } from "react";
import { ThemeName, ThemeProvider } from "./theme";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <ThemeProvider theme={ThemeName.dark}>
      <div className="App">
        <Card isButton={true}>Hello</Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
