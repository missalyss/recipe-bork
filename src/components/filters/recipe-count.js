import React from "react";
import "../styles/index.css";
const RecipeCount = ({ isBorked, numberOfResults }) => {
  return <p className="white ml4 text-md">#{numberOfResults}</p>;
};

export default RecipeCount;
