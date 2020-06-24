import React, { useState } from 'react';
import rawData from '../data.js';
import alphabetize from './util/alphabetize';
import RecipeList from './recipe/recipe-list.js';
import Nav from './nav';
import Search from './search';
import Header from './header';
import Filters from './filters';
import Footer from './footer';
import './styles/index.css';

const data = alphabetize(rawData);

const Root = () => {
  const [searchQuery, setSearchQuery ] = useState('');
  const [mealTypeFilter, setMealTypeFilter ] = useState('');

  const filterRecipes = (recipeList, filterType, filter) => {
    if (!filter) {
      return recipeList;
    }
    const filteredRecipeList = Object.values(recipeList).filter(recipe => {
      if (filterType === 'search') {
        return recipe.title.match(new RegExp(filter, 'ig'));
      }
      if (filterType === 'mealType' && recipe.timeOfDay[0]) {
        return recipe.timeOfDay.find(mealType => mealType === filter);
      }
    })
    const filteredObj = {};
    filteredRecipeList.map(recipe => filteredObj[recipe.id] = recipe)
    return filteredObj;
  }
  const filteredSearchRecipes = filterRecipes(data, 'search', searchQuery);
  const filteredRecipes = filterRecipes(filteredSearchRecipes, 'mealType', mealTypeFilter);

  const filteredResultCount = Object.keys(filteredRecipes).length;

  return (
    <div className="Root">
      <Header />
      <div className='rootBody'>
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} numberOfResults={filteredResultCount}/>
        <Filters setMealTypeFilter={setMealTypeFilter}/>
        <Nav recipes={filteredRecipes}/>
        <RecipeList recipes={filteredRecipes} />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
