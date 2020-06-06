import React from 'react';

const Search = ({setSearchQuery,searchQuery}) => {
  return (
    <input name="search" type="text" placeholder="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  );
}

export default Search;
