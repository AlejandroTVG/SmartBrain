import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav
      className="w-100 ma0 h-auto pr4"
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <p className="f3 link dim black underline pointer">Sign Out</p>
    </nav>
  );
}
