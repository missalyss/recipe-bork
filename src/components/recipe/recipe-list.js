import React from 'react';
import Recipe from './recipe';
import recipeList from '../../data.js';
import './styles.css';

const RecipeList = () => {
  const recipes = Object.values(recipeList);
  const list = recipes.map((recipe, index) => {
    return (<Recipe recipe={recipe} key={index} />)
  });

  return (
    <div className='container'>
      {list}
    </div>
  );
}

export default RecipeList;
