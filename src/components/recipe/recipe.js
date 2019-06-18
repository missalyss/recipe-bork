import React from 'react';
import Ingredients from './ingredients';

const Recipe = ({ recipe: { title, ingredients, directions } }) => {
  return (
    <div className='container'>
      <h1>
        {title}
      </h1>
      <Ingredients ingredients={ingredients} />
      <p>{directions}</p>
    </div>
  );
}

export default Recipe;
