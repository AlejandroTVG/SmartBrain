import React from "react";
import "./Navigation.css";

export default function Navigation({
  onNavSignInClick,
  signedIn,
  onRegisterClick,
  onSignInClick,
}) {
  if (signedIn === true) {
    return (
      <nav
        className="w-100 ma0 h-auto pr4"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <p
          className="f3 link dim black underline pointer"
          onClick={onSignInClick}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="w-100 ma0 h-auto pr4"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <p
          className="f3 link dim black underline pointer"
          onClick={onNavSignInClick}
        >
          Sign in
        </p>
        <p
          className="f3 link dim black underline pointer ml4"
          onClick={onRegisterClick}
        >
          Register
        </p>
      </nav>
    );
  }
}
