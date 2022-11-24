import React from "react";
import { isEmpty } from "lodash";
import Ingredients from "./ingredients";
import Credit from "./credit";
import DearAlyssa from "./dear-alyssa";
import Directions from "./directions";

import "./styles.css";

const Recipe = ({
  recipe: { title, ingredients, directions, tempTimeYield, credit, dearAlyssa, familySecret = false }, isSignedIn
}) => {
  const includeDearAlyssa = !isEmpty(dearAlyssa);
  const titlea = title.toLowerCase();
  const id = titlea.replace(/\s+/g, "-");
console.log('familySecret && !isSignedIn : ', familySecret, !isSignedIn);

  return familySecret && !isSignedIn ? <h1>Shhh! Eets fermily receepes!</h1> :  (
    <div className="container recipe-container bg-cream" id={id}>
      <a href={`#${id}`} className="text-soft-black r-title bold">
        {title.toUpperCase()}
      </a>
      {tempTimeYield && <p>{tempTimeYield}</p>}
      <Ingredients ingredients={ingredients} />

     <Directions directions={directions} />
      {includeDearAlyssa && (
        <DearAlyssa dearAlyssa={dearAlyssa}/>
      )}
      <Credit credit={credit} dearAlyssa={dearAlyssa}/>
      <a href="#" className="scroll-link text-blue">
        Scroll to top
      </a>
    </div>
  );
};

export default Recipe;
