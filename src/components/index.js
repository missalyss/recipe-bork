import React, { useState } from 'react';
import { isEqual } from 'lodash';
import data from '../data.js';
import RecipeList from './recipe/recipe-list.js';
import Nav from './nav';
import Search from './search';
import Header from './header';
import Footer from './footer';
import './styles/index.css';

const Root = () => {
  const [searchQuery, setSearchQuery ] = useState('');

  const filterRecipes = (filter) => {
    if (!filter) {
      return data;
    }
    const filteredRecipeList = Object.values(data).filter(recipe => {
      const titleMatches = recipe.title.match(new RegExp(filter, 'ig'));
      return titleMatches;
    })
    const filteredObj = {};
    filteredRecipeList.map(recipe => filteredObj[recipe.id] = recipe)
    return filteredObj;
  }
  const filteredRecipes = filterRecipes(searchQuery);
  const filteredResultCount = Object.keys(filteredRecipes).length;

  return (
    <div className="Root">
      <Header />
      <div className='rootBody'>
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} numberOfResults={filteredResultCount}/>
        <Nav recipes={filteredRecipes}/>
        <RecipeList recipes={filteredRecipes} />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
