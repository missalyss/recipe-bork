import React from 'react';
import './App.css';
import data from './data.js';
import RecipeList from './components/recipe/recipe-list.js';

const App = () => {
  console.log('recipes: ', data)
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}

export default App;
