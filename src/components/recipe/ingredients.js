import React from 'react';

const Ingredients = ({ ingredients }) => {
  const list = ingredients.map((ingredient, index) => {
    return (
      <p className="text-soft-black ingredient-line" key={index}>
        {ingredient}
      </p>
    )
  });

  return (
    <div className='ingredients'>
      {list}
    </div>
  );
}

export default Ingredients;

