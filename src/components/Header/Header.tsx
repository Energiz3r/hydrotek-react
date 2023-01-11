import React from "react";
import { styles } from "./Header.css";
import { ReactComponent as SvgTreePalm } from "../../Icons/regular/tree-palm.svg";
import { ReactComponent as SvgHomeAlt } from "../../Icons/regular/home-alt.svg";
import { ReactComponent as SvgCheeseburger } from "../../Icons/regular/cheeseburger.svg";

interface HeaderProps {
  pageTitle?: string;
  onMenuToggle: () => void;
  loggedIn: boolean;
  loginName: string;
}

export const Header = ({
  pageTitle = "Test",
  onMenuToggle,
  loggedIn,
  loginName,
}: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.menuButtonContainer}>
          <button
            onClick={() => {
              onMenuToggle();
            }}
            className={styles.menuButton}
          >
            <SvgCheeseburger />
          </button>
        </div>
        <div className={`${styles.logoContainer} ${styles.titleContainer}`}>
          <div>
            <SvgTreePalm />
          </div>
          <div>HydroTek</div>
        </div>
        <div className={styles.titleContainer}> - {pageTitle}</div>
        <div className={styles.utilityContainer}>
          Welcome, {loginName || "Guest"}
          {loggedIn && (
            <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-auto-logout-link="true"
              data-use-continue-as="true"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
