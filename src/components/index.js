import React from 'react';
import data from '../data.js';
import RecipeList from './recipe/recipe-list.js';
import Nav from './nav';
import Search from './search';
import Header from './header';
import Footer from './footer';
import './styles/index.css';

const Root = () => {
  console.log('recipes: ', data)
  return (
    <div className="Root">
      <Header />
      <div className='rootBody'>
        <Search />
        <Nav />
        <RecipeList />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
