import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { logInPageIsActive, setLogInPageIsActive } = props;
  const [logInStyle, setLogInStyle] = useState({});
  const [signUpStyle, setSignUpStyle] = useState({});
  const styleObjBold = {
    fontWeight: "800",
  };

  useEffect(() => {
    if (logInPageIsActive) {
      setLogInStyle(styleObjBold);
      setSignUpStyle({});
    } else {
      setLogInStyle({});
      setSignUpStyle(styleObjBold);
    }
  }, [logInPageIsActive]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "aquamarine",
      }}
    >
      <span>Authnetication</span>
      <span style={{ ...logInStyle }}>
        <Link to="/login">Log In</Link>
      </span>
      <span style={{ ...signUpStyle }}>
        <Link to="/signup">Sign Up</Link>
      </span>
    </div>
  );
};

export default Header;
