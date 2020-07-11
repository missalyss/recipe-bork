import React from 'react';
import { isEmpty } from 'lodash';
import Recipe from './recipe';
import alphadividerUtil from '../util/alphadivider';
import './styles.css';

const RecipeList = ({recipes, isBorked}) => {
  if (isEmpty(recipes)) {
    return (<h3>{isBorked ? "Ouoops! Nu receepes! Bork Bork Bork!" : "Oops! No recipes!"}</h3>)
  }

  const recipesWithAlphadivider = alphadividerUtil({recipes, withRecipe: true});
  const list = recipesWithAlphadivider.map((heading, index) => {
    if (heading.length === 1) {
      return (<h3 className='container bg-dark-blue text-cream' id={heading} key={index}>{heading.toUpperCase()}</h3>)
    }
    return (<Recipe recipe={recipes[heading]} key={index} isBorked={isBorked}/>)
  });

  return (
    <div className='container'>
      {list}
    </div>
  );
}

export default RecipeList;
