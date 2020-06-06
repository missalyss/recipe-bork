import React from 'react';
import Recipe from './recipe';
import recipeList from '../../data.js';
import alphadividerUtil from '../util/alphadivider';
import './styles.css';

const RecipeList = () => {
  const recipesWithAlphadivider = alphadividerUtil(true);
  const list = recipesWithAlphadivider.map((heading, index) => {
    if (heading.length === 1) {
      return (<h3 className='container bg-dark-blue text-cream' id={heading} key={index}>{heading.toUpperCase()}</h3>)
    }
    return (<Recipe recipe={recipeList[heading]} key={index} />)
  });

  return (
    <div className='container'>
      {list}
    </div>
  );
}

export default RecipeList;
