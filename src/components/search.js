import React from 'react';
import './styles/index.css';

const Search = ({setSearchQuery, searchQuery, numberOfResults, isBorked}) => {
  return (
    <div className="flex align-center justify-center">
      <input className="search-box" name="search" type="search" placeholder={isBorked ? "Seerch" : "Search"} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      <p className="text-cream ml4">{isBorked ? "Nuomber ouff receepes:" : "Number of recipes:"} {numberOfResults}</p>
    </div>
  );
}

export default Search;
