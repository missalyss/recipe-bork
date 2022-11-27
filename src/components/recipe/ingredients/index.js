import React from "react";
import { Quantity } from "./quantity";
import { UnitOfMeasure } from "./unitOfMeasure";

const AltName = ({ altName }) => {
  if (altName) {
    return (
      <span className="mr2">
        <i className="mr2">/</i>
        {altName}
      </span>
    );
  }
  return null;
};

const Ingredients = ({ ingredients }) => (
  // use padding because margin collapses
  <div className="pt3 pb3">
    <h4>Ingredients</h4>
    {ingredients.map((ingredient, i) => {
      if (ingredient.qty) {
        const { qty, unit, name, altName, notes } = ingredient;
        return (
          <p className="text-black mt3 mb3" key={i}>
            <Quantity qty={qty} />
            {unit && <UnitOfMeasure unit={unit} qty={qty} />}
            <span className="mr2">{name}</span>
            <AltName altName={altName} />
            <span>{notes}</span>
          </p>
        );
      }
      return (
        <p className="text-black mt3 mb3" key={i}>
          {ingredient}
        </p>
      );
    })}
  </div>
);

export default Ingredients;
