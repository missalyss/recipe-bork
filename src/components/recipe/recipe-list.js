import React from 'react';
import Recipe from './recipe';
import recipeList from '../../data.js';
import './styles.css';

const RecipeList = () => {
  console.log(recipeList);
  const recipes = Object.values(recipeList);
  console.log({ recipes });

  const list = recipes.map((recipe, index) => {
    console.log('recipppe: ', recipe);

    return (<Recipe recipe={recipe} key={index} />)
  });

  return (
    <div className='container'>
      {list}
    </div>
  );
}

export default RecipeList;
