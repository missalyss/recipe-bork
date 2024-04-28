import React from "react";

import AlphaNav from "./alpha-nav";
import Search from "./search";
import FoodFilters from "./food-filters";
import BorkBox from "./bork-box";
import PieBox from "./pie-box";
import ClearFilters from "./clear-filters";

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
      <div className="lg-flex width-100 justify-between align-center">
        <h2 className="textXl white">Filter recipes</h2>
        <div>
          <BorkBox setBorked={setBorked} isBorked={isBorked} />
          <ClearFilters
            setSearchQuery={setSearchQuery}
            setMealTypeFilter={setMealTypeFilter}
            setDietaryNeedsFilter={setDietaryNeedsFilter}
            setShowPie={setShowPie}
          />
          <PieBox setShowPie={setShowPie} showPie={showPie} />
        </div>
      </div>
      <FoodFilters
        setMealTypeFilter={setMealTypeFilter}
        setDietaryNeedsFilter={setDietaryNeedsFilter}
        mealTypeFilter={mealTypeFilter}
        dietaryNeedsFilter={dietaryNeedsFilter}
        isBorked={isBorked}
      />
      <div className="lg-flex">
        <Search
          searchQuery={searchQuery}
          numberOfResults={filteredResultCount}
          isBorked={isBorked}
          setSearchQuery={setSearchQuery}
          setMealTypeFilter={setMealTypeFilter}
          setDietaryNeedsFilter={setDietaryNeedsFilter}
          setShowPie={setShowPie}
        />
        <AlphaNav recipes={filteredRecipes} />
      </div>
    </>
  );
};

export default Filters;
