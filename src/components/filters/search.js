import React from "react";
import "../styles/index.css";

const Search = ({ setSearchQuery, searchQuery, isBorked }) => {
  return (
    <input
      className="search-box mt2 width-100 lg-width-33"
      name="search"
      type="search"
      placeholder={isBorked ? "🔍 Seerch" : "🔍 Search"}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Search;
