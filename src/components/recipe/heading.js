import React from "react";

const RecipeHeading = ({ id, title }) => {
  return (
    <h3>
      <a href={`#${id}`} className="text-black block text-center r-title bold">
        {title.toUpperCase()}
      </a>
    </h3>
  );
};

export default RecipeHeading;
