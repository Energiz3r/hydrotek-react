import { appName } from "../config";
import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "5rem",
    left: "0",
    top: "0",
    //backgroundColor: ({ theme }) => theme.backgroundDarker,
    //borderBottom: ({ theme }) => `.2rem solid ${theme.highlight}`,
  },
  appName: {
    marginTop: "1.0rem",
    marginLeft: "1rem",
  },
  menuButton: {
    //background: "red",
    minHeight: "3rem",
    //fontSize: ({ theme }) => theme.mSize,
    padding: 0,
  },
  menuButtonIcon: {
    width: "4rem",
  }, 
  userName: {
    float: "right",
    position: "absolute",
    right: "2rem",
    marginTop: "1.5rem",
  },
});

interface Props {
  onMenuToggle: ()=> void;
  loggedIn?: boolean;
  loginName: string;
}

export const Navbar: React.FC<Props> = ({ onMenuToggle, loggedIn, loginName }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <button
        onClick={() => {
          onMenuToggle();
        }}
        className={`button-default ${classes.menuButton}`}
      >
        <i className={`fas fa-bars ${classes.menuButtonIcon}`}></i>
      </button>
      <h2 className={classes.appName}>{appName}</h2>
      <h4 className={classes.userName}>{loginName}</h4>
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
  );
};

