import React, { useState } from 'react';
import data from '../data.js';
import RecipeList from './recipe/recipe-list.js';
import Nav from './nav';
import Search from './search';
import Header from './header';
import Footer from './footer';
import './styles/index.css';

const Root = () => {
  const [ recipes, setFilteredRecipes ] = useState(data);
  const [searchQuery, setSearchQuery ] = useState('');

  const filterRecipes = (filter) => {
    if (!filter) {
      return data;
    }
    const filteredRecipeList = Object.values(recipes).filter(recipe => {
      const titleMatches = recipe.title.match(new RegExp(filter, 'ig'));
      return titleMatches;
    })
    const filteredObj = {};
    filteredRecipeList.map(recipe => filteredObj[recipe.id] = recipe)
    return filteredObj;
  }
  const filteredRecipes = filterRecipes(searchQuery);

  if (JSON.stringify(recipes) !== JSON.stringify(filteredRecipes)) {
    setFilteredRecipes(filteredRecipes);
  }

  return (
    <div className="Root">
      <Header />
      <div className='rootBody'>
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
        <Nav recipes={recipes}/>
        <RecipeList recipes={recipes} />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
