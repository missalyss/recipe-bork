import React from "react";
import { isEmpty } from "lodash";

import Ingredients from "./ingredients";
import Credit from "./credit";
import DearAlyssa from "./dear-alyssa";
import Directions from "./directions";
import SecretRecipe from "./secret-recipe";

import "./styles.css";

const Recipe = ({
  recipe: { title, ingredients, directions, tempTimeYield, credit, dearAlyssa, familySecret = false }, isSignedIn
}) => {
  const includeDearAlyssa = !isEmpty(dearAlyssa);
  const titlea = title.toLowerCase();
  const id = titlea.replace(/\s+/g, "-");

  return Boolean(familySecret) && !isSignedIn ? <SecretRecipe /> :  (
    <div className="container recipe-container bg-white" id={id}>
      <a href={`#${id}`} className="text-black block text-center r-title bold">
        {title.toUpperCase()}
      </a>
      {tempTimeYield && <p>{tempTimeYield}</p>}
      <Ingredients ingredients={ingredients} />

     <Directions directions={directions} />
      {includeDearAlyssa && (
        <DearAlyssa dearAlyssa={dearAlyssa}/>
      )}
      <Credit credit={credit} dearAlyssa={dearAlyssa}/>
      <a href="#topOfPage" className="scroll-link text-blue block text-center">
        Scroll to top
      </a>
    </div>
  );
};

export default Recipe;
