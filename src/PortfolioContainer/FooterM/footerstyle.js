import React from "react";
import "./footerstyle.css";

export default function footer() {
  return (
    <div className="footer-container-style">
      <div className="footer-parent-style">
        <img
          src={require("../../assets/Home/shape-bg.png").default}
          alt=""
        />
      </div>
    </div>
  );
}
