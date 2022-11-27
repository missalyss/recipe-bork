import React from "react";
import headerImage from "../pattern-lib/assets/images/cherf.jpg";
import "./styles/header.css";

const Hero = ({ isBorked }) => {
  return (
    <a href="/">
      <div className="flex justify-center align-center height-100">
        <img className="banner" src={headerImage} alt="head chef banner" />
        <h1
          id="topOfPage"
          className={`heading-text text-white text-center pl2 pr2 ${
            isBorked ? "borked-text" : ""
          }`}
        >
          {isBorked
            ? "Zee-a Helgeburnes Femeely Receepe-a Börk"
            : "The Helgabones Family Recipe Börk"}
        </h1>
      </div>
    </a>
  );
};

export default Hero;
