import React from 'react';
import data from '../data.js';
import RecipeList from './recipe/recipe-list.js';
import Nav from './nav';

const Root = () => {
  console.log('recipes: ', data)
  return (
    <div className="Root">
      <Nav />
      <RecipeList />
    </div>
  );
}

export default Root;
