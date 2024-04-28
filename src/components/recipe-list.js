import React from "react";
import { isEmpty } from "lodash";
import Recipe from "./recipe";
import alphadividerUtil from "./util/alphadivider";
import "./styles/index.css";

const RecipeList = ({ recipes, isBorked }) => {
  if (isEmpty(recipes)) {
    return (
      <p>
        {isBorked
          ? "Ouoops! Nu receepes! Bork Bork Bork!"
          : "Oops! No recipes!"}
      </p>
    );
  }

  const recipesWithAlphadivider = alphadividerUtil({
    recipes,
    withRecipe: true,
  });

  const isSignedIn = sessionStorage.getItem("beep boop") === "beep boop beep";

  return (
    <>
      {recipesWithAlphadivider.map((heading, index) => {
        if (heading.length === 1) {
          return (
            <h2
              className="bg-darkBlue white textCenter radiusSm pt2 pb2"
              id={heading}
              key={index}
            >
              {heading.toUpperCase()}
            </h2>
          );
        }

        return (
          <Recipe
            recipe={recipes[heading]}
            isSignedIn={isSignedIn}
            key={index}
          />
        );
      })}
    </>
  );
};

export default RecipeList;
