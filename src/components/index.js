import React, { useState } from "react";
import rawData from "../data.json";
import alphabetize from "./util/alphabetize";
import RecipeList from "./recipe/recipe-list.js";
import Hero from "./hero";
import Filters from "./filters/index";
import Footer from "./footer";
import "./styles/index.css";

import SignIn from "./sign-in";

const data = alphabetize(rawData);

const Root = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [dietaryNeedsFilter, setDietaryNeedsFilter] = useState("");
  const [isBorked, setBorked] = useState(false);
  const [showPie, setShowPie] = useState(false);

  const filterRecipes = ({ recipeList, filterType, filter }) => {
    if (!filter) {
      return recipeList;
    }
    const filteredRecipeList = Object.values(recipeList).filter((recipe) => {
      if (filterType === "search") {
        return recipe.title.match(new RegExp(filter, "ig"));
      }
      if (filterType === "mealType" && recipe.timeOfDay.length) {
        return recipe.timeOfDay.find((mealType) => mealType === filter);
      }
      if (filterType === "dietaryNeeds" && recipe.dietaryNeeds) {
        return recipe.dietaryNeeds.find(
          (dietaryNeed) => dietaryNeed === filter
        );
      }
      if (filterType === "showPie" && recipe.isPie) {
        return recipe;
      }
    });
    const filteredObj = {};
    filteredRecipeList.map((recipe) => (filteredObj[recipe.id] = recipe));
    return filteredObj;
  };
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
      <SignIn isBorked={isBorked} />
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

export default Root;
