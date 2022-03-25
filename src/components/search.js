import React from 'react';
import './styles/index.css';

const Search = ({ setSearchQuery, searchQuery, numberOfResults, isBorked, setMealTypeFilter, setDietaryNeedsFilter, setShowPie }) => {
  return (
    <div className="flex align-center justify-evenly mt2">
      <input
        className="search-box"
        name="search"
        type="search"
        placeholder={isBorked ? "Seerch" : "Search"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <p className="text-cream ml4 md-font">
        {isBorked ? "Nuomber ouff receepes:" : "Number of recipes:"} {numberOfResults}
      </p>

      <button onClick={() => {
        setSearchQuery('')
        setMealTypeFilter('')
        setDietaryNeedsFilter('')
        setShowPie(false)
      }} className='border p2 cursor-pointer'>X</button>
    </div>
  );
}

export default Search;
