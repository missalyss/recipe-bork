import recipeList from '../../data.js';

const alphadividerUtil = withRecipe => {
  const recipeKeys = Object.keys(recipeList);
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
