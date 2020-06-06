const alphadividerUtil = ({recipes, withRecipe}) => {
  const recipeKeys = Object.keys(recipes);
  const recipesWithAlphadivider = [];
  const alphadividersOnly = []

  recipeKeys.map(recipeName => {
    const beginningLetter = recipeName[0];
    if (recipesWithAlphadivider.indexOf(beginningLetter) === -1) {
      recipesWithAlphadivider.push(beginningLetter);
      alphadividersOnly.push(beginningLetter)
    }
      recipesWithAlphadivider.push(recipeName)
  })
  return withRecipe ? recipesWithAlphadivider : alphadividersOnly
}

export default alphadividerUtil;
