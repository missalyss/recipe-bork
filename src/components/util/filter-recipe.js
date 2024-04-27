export const filterRecipes = ({ recipeList, filterType, filter }) => {
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
      return recipe.dietaryNeeds.find((dietaryNeed) => dietaryNeed === filter);
    }
    if (filterType === "showPie") {
      return recipe.isPie;
    }
    return {};
  });

  const filteredObj = {};
  filteredRecipeList.map((recipe) => {
    return (filteredObj[recipe.id] = recipe);
  });
  return filteredObj;
};
