import React from "react";
import "../styles/index.css";
import "./button.css";

const Button = ({ onClick, className, visualStyle, children, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer myButton ${
        visualStyle === "link" ? "textLink" : ""
      } ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
