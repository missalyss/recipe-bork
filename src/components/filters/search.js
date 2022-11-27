import React from "react";
import "../styles/index.css";
const Search = ({
  setSearchQuery,
  searchQuery,
  numberOfResults,
  isBorked,
  setMealTypeFilter,
  setDietaryNeedsFilter,
  setShowPie,
}) => {
  return (
    <div className="flex align-center mt2">
      <input
        className="search-box"
        name="search"
        type="search"
        placeholder={isBorked ? "Seerch" : "Search"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <p className="text-white ml4 md-font">
        {isBorked ? "Nuomber ouff receepes: " : "Number of recipes: "}
        {numberOfResults}
      </p>

      <button
        onClick={() => {
          setSearchQuery("");
          setMealTypeFilter("");
          setDietaryNeedsFilter("");
          setShowPie(false);
        }}
        className="border m3 p2 cursor-pointer"
      >
        Clear all filters
      </button>
    </div>
  );
};

export default Search;
