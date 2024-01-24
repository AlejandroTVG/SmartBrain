import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

export default function Logo() {
  return (
    <div className="ml4">
      <Tilt className="style br2 shadow-2 mw4 h-auto">
        <div>
          <img src={brain} alt="Brain"></img>
        </div>
      </Tilt>
    </div>
  );
}
