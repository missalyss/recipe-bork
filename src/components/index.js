import React, { useState } from 'react';
import rawData from '../data.json';
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
  const [dietaryNeedsFilter, setDietaryNeedsFilter ] = useState('');


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

      if (filterType === 'dietaryNeeds' && recipe.dietaryNeeds) {
        return recipe.dietaryNeeds.find(dietaryNeed => dietaryNeed === filter);
      }
    })
    const filteredObj = {};
    filteredRecipeList.map(recipe => filteredObj[recipe.id] = recipe)
    return filteredObj;
  }
  const filteredSearchRecipes = filterRecipes(data, 'search', searchQuery);

  const filteredDietaryRecipes = filterRecipes(filteredSearchRecipes, 'dietaryNeeds', dietaryNeedsFilter);

  const filteredRecipes = filterRecipes(filteredDietaryRecipes, 'mealType', mealTypeFilter);

  const filteredResultCount = Object.keys(filteredRecipes).length;

  return (
    <div className="Root">
      <Header />
      <div className='rootBody'>
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} numberOfResults={filteredResultCount}/>
        <Filters setMealTypeFilter={setMealTypeFilter} setDietaryNeedsFilter={setDietaryNeedsFilter}/>
        <Nav recipes={filteredRecipes}/>
        <RecipeList recipes={filteredRecipes} />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
