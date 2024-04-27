import React from "react";
import "../styles/index.css";
import "./button.css";

const Button = ({ onClick, className, visualStyle, children }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${
        visualStyle === "link" ? "text-link" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
