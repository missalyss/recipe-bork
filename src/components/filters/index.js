import React from "react";

import AlphaNav from "./alpha-nav";
import Search from "./search";
import FoodFilters from "./food-filters";
import BorkBox from "./bork-box";
import PieBox from "./pie-box";

const Filters = ({
  isBorked,
  setBorked,
  showPie,
  setShowPie,
  searchQuery,
  setSearchQuery,
  setMealTypeFilter,
  mealTypeFilter,
  setDietaryNeedsFilter,
  dietaryNeedsFilter,
  filteredRecipes,
  filteredResultCount,
}) => {
  return (
    <>
      <div className="flex">
        <BorkBox setBorked={setBorked} isBorked={isBorked} />
        <PieBox setShowPie={setShowPie} showPie={showPie} />
      </div>
      <Search
        searchQuery={searchQuery}
        numberOfResults={filteredResultCount}
        isBorked={isBorked}
        setSearchQuery={setSearchQuery}
        setMealTypeFilter={setMealTypeFilter}
        setDietaryNeedsFilter={setDietaryNeedsFilter}
        setShowPie={setShowPie}
      />
      <FoodFilters
        setMealTypeFilter={setMealTypeFilter}
        setDietaryNeedsFilter={setDietaryNeedsFilter}
        mealTypeFilter={mealTypeFilter}
        dietaryNeedsFilter={dietaryNeedsFilter}
        isBorked={isBorked}
      />
      <AlphaNav recipes={filteredRecipes} />
    </>
  );
};

export default Filters;
