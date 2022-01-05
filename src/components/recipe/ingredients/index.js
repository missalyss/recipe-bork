import React from 'react';
import { Quantity } from './quantity';
import { UnitOfMeasure } from './unitOfMeasure';

const AltName = ({altName}) => {
  if (altName) {
    return (
      <span className='mr2'>
        <i className='mr2'>/</i>{altName}
      </span>
    )
  }
  return null;
}

const Ingredients = ({ ingredients }) => (
  <div className='ingredients'>
  {ingredients.map((ingredient, i) => {
    if (ingredient.qty) {
      const {qty, unit, name, altName, notes } = ingredient;
      return (
        <p className="text-soft-black ingredient-line" key={i}>
          <Quantity qty={qty} />
          {unit && <UnitOfMeasure unit={unit} qty={qty} />}
          <span className='mr2'>{name}</span>
          <AltName altName={altName} />
          {notes}
      </p>
      )
    }
  return (
    <p className="text-soft-black ingredient-line" key={i}>
      {ingredient}
    </p>
    )
  })}
  </div>
);

export default Ingredients;

