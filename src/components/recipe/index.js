import React from "react";
import { isEmpty } from "lodash";

import Ingredients from "./ingredients";
import Credit from "./credit";
import DearAlyssa from "./dear-alyssa";
import Directions from "./directions";
import SecretRecipe from "./secret-recipe";
import RecipeHeading from "./heading";
import "./styles.css";
import Expander from "../../pattern-lib/components/expander";

const Recipe = ({
  recipe: {
    title,
    ingredients,
    directions,
    tempTimeYield,
    credit,
    dearAlyssa,
    familySecret = false,
  },
  isSignedIn,
}) => {
  const includeDearAlyssa = !isEmpty(dearAlyssa);
  const titlea = title.toLowerCase();
  const id = titlea.replace(/\s+/g, "-");

  return Boolean(familySecret) && !isSignedIn ? (
    <SecretRecipe id={id} title={title} />
  ) : (
    <div className="radius-2 p3 mb3 recipe-container bg-white" id={id}>
      <RecipeHeading id={id} title={title} />
      {tempTimeYield && <p className="text-center">{tempTimeYield}</p>}
      <Expander>
        <Ingredients ingredients={ingredients} />

        <Directions directions={directions} />
        {includeDearAlyssa && <DearAlyssa dearAlyssa={dearAlyssa} />}
        <Credit credit={credit} dearAlyssa={dearAlyssa} />
      </Expander>
      <a href="#topOfPage" className="scroll-link text-blue block text-center">
        Scroll to top
      </a>
    </div>
  );
};

export default Recipe;
