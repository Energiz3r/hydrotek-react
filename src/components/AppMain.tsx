import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import { setRoute } from '../actions/UIActions'
import { serverLocation } from "../config";
import { useState } from 'react';
import RouteManager from "./RouteManager";
import LoginForm from "./LoginForm";
import { Navbar } from "./Navbar";
import Menu from "./Menu";
import Support from "./Support";
import Devices from "./Devices";
import Reports from "./Reports";
import DeviceDashboard from "./DeviceDashboard";

const AppMain = (props: any) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { appIsBlurred } = props.UI;
  const { loggedIn, loginName } = props.login;

  return(
    <div className={"app-root-container"}>
      <Route path="/*" component={RouteManager} />
      <Route path={serverLocation + "login"} component={LoginForm} />

      <div
        className={`app-overlay-container ${appIsBlurred || !loggedIn ? " blur-container" : ""}`}
      >
        <div className="main-page-container">
          <Navbar onMenuToggle={() => setShowMenu(!showMenu)} loginName={loginName} />
          <div className="secondary-page-container">
            {showMenu && <Menu menuToggle={() => setShowMenu(!showMenu)} />}
            <div className="main-content-container">
              <Route
                path={serverLocation + "dashboard"}
                component={DeviceDashboard}
              />
              <Route path={serverLocation + "devices"} component={Devices} />
              <Route path={serverLocation + "reports"} component={Reports} />
              <Route path={serverLocation + "support"} component={Support} />
            </div>
          </div>
        </div>

        <div
          className={`app-color-overlay ${appIsBlurred || !loggedIn ? " app-color-overlay-visible" : " app-color-overlay-invisible"}`}
        ></div>
      </div>
    </div>
  )
}

export default connect((state) => state)(AppMain);
