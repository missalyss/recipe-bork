import React from "react";
import "../styles/index.css";
const Search = ({ setSearchQuery, searchQuery, numberOfResults, isBorked }) => {
  return (
    <div className="flex align-center mt2 width-100 lg-width-33">
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
    </div>
  );
};

export default Search;
