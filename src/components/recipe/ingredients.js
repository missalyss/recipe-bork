import React from 'react';

const Ingredients = ({ ingredients }) => {
  const list = ingredients.map((ingredient, index) => {
    return (<p key={index}>{ingredient}</p>)
  });

  return list;
}

export default Ingredients;

