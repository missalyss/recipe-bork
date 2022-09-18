export default (recipes) => {
  const alphebetizedRecipes = {};
  Object.keys(recipes)
    .sort()
    .forEach((key) => {
      alphebetizedRecipes[key] = recipes[key];
    });
  return alphebetizedRecipes;
};
