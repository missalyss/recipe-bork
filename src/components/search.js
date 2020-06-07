import React from 'react';
import './styles/index.css';

const Search = ({setSearchQuery, searchQuery, numberOfResults}) => {
  return (
    <div className="flex align-center justify-center">
      <input className="search-box" name="search" type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      <p className="text-cream ml4">Number of recipes: {numberOfResults}</p>
    </div>
  );
}

export default Search;
