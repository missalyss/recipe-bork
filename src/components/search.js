import React, { useState } from 'react';
import recipes from '../data.js';
const Search = () => {
  console.log('recipes: ', recipes);

  const [searchQuery, setSearchQuery ] = useState('');
  console.log('SEARCH QUERY: ', searchQuery);
  return (
    <input name="search" type="text" placeholder="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  );
}

export default Search;
