import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { DeviceSettings } from "./components/DeviceSettings/DeviceSettings";

function App() {
  const [shouldShowMenu, setShouldShowMenu] = useState(false);
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
      <DeviceSettings />
    </>
  );
}

export default App;
