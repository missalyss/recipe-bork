export default (recipes) => {
  const alphebetizedRecipes = {};
  Object.keys(recipes)
    .sort()
    .forEach(function (key) {
      alphebetizedRecipes[key] = recipes[key];
    });
  return alphebetizedRecipes;
};
