import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

function App() {
  const [shouldShowMenu, setShouldShowMenu] = useState(true);
  const handleMenuToggle = () => {
    setShouldShowMenu(!shouldShowMenu);
  };
  return (
    <>
      <Header
        onMenuToggle={handleMenuToggle}
        loggedIn={true}
        loginName={"Tim"}
      />
      {shouldShowMenu ? <Menu /> : null}

      <div style={{}}>
        zontent Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Lontent
      </div>
    </>
  );
}

export default App;
