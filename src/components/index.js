import React, { useState } from "react";
import rawData from "../data.json";
import alphabetize from "./util/alphabetize";
import RecipeList from "./recipe-list.js";
import Hero from "./hero";
import Filters from "./filters/index";
import Footer from "./footer";

import { filterRecipes } from "./util/filter-recipe.js";
import "./styles/index.css";

const data = alphabetize(rawData);

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [dietaryNeedsFilter, setDietaryNeedsFilter] = useState("");
  const [isBorked, setBorked] = useState(false);
  const [showPie, setShowPie] = useState(false);

  const filteredSearchRecipes = filterRecipes({
    recipeList: data,
    filterType: "search",
    filter: searchQuery,
  });

  const filteredDietaryRecipes = filterRecipes({
    recipeList: filteredSearchRecipes,
    filterType: "dietaryNeeds",
    filter: dietaryNeedsFilter,
  });

  const filteredMealtypeRecipes = filterRecipes({
    recipeList: filteredDietaryRecipes,
    filterType: "mealType",
    filter: mealTypeFilter,
  });

  const filteredRecipes = filterRecipes({
    recipeList: filteredMealtypeRecipes,
    filterType: "showPie",
    filter: showPie,
  });

  const filteredResultCount = Object.keys(filteredRecipes).length;

  return (
    <div className="">
      <Hero isBorked={isBorked} />
      <div className="rootBody">
        <Filters
          isBorked={isBorked}
          setBorked={setBorked}
          setShowPie={setShowPie}
          showPie={showPie}
          setMealTypeFilter={setMealTypeFilter}
          searchQuery={searchQuery}
          setDietaryNeedsFilter={setDietaryNeedsFilter}
          mealTypeFilter={mealTypeFilter}
          dietaryNeedsFilter={dietaryNeedsFilter}
          filteredResultCount={filteredResultCount}
          filteredRecipes={filteredRecipes}
          setSearchQuery={setSearchQuery}
        />
        <RecipeList recipes={filteredRecipes} isBorked={isBorked} />
        <Footer isBorked={isBorked} />
      </div>
    </div>
  );
};

export default HomePage;
