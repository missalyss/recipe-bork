const recipes = {
  applesauceBranMuffins: {
    title: "APPLESAUCE BRAN MUFFINS",
    tempTimeYield: '400F for 20 min, makes 18 muffins.',
    ingredients: [
      "1½ C flour",
      "1 1 / 3 C unprocessed bran",
      "2/3 C sugar",
      "4 tsp baking powder",
      "1 tsp cinnamon",
      "1 tsp salt",
      "1 C applesauce",
      "¼ C milk",
      "4 T Veggie oil",
      "2 beaten eggs"
    ],
    directions: [ "Mix dry and liquid ingredients in separate bowls.Then combine and mix gently. Don’t overmix."
    ]
  },
  ableskivers: {
    title: "AEBLESKIVERS",
    tempTimeYield: 'Stove - medium low.',
    ingredients: [
      "2 ¼ cup flour",
      "1 T sugar",
      "1 T baking powder",
      "1 tsp salt",
      "2 cup milk",
      "3 eggs—separated"
    ],
    directions: [ "Blend together (whisk) except egg whites. Whip egg whites into meringue. Heat pan. Fold together. Put a bit of oil or margarine before each batch."
    ]
  },
  crepes: {
    title: "CREPES",
    tempTimeYield: 'Stove - medium low.',
    ingredients: [
      "1 C flour",
      "1 ½ C milk",
      "2 eggs",
      "1 T cooking oil",
      "¼ tsp salt"
    ],
    directions: [ "Spoon small amount of batter onto lightly greased skillet. Spread batter and wait until there's no wet batter to flip. (Be careful!) Cook until slightly browned. Recommended additives: Banana, Nutella, Coconut, Butter and cinnamon-sugar, maple syrup."
    ]
  },
  quiche: {
    title: "QUICHE",
    tempTimeYield: 'Crust: 425F 5 min. Pie: 350F 45 min.',
    ingredients: [
      "About 7 slices of bacon",
      "1 whole med.White / sweet(what’s the difference ?) onion",
      "  ½ green pepper",
      "1 c of cheese(used swiss..maybe a little sharper w / cheddar ?)",
      "4 eggs",
      "1 c milk",
      "1 T butter melted",
      "1 T flour"
    ],
    directions: [ "Crust: single shell form then cook at 425 F for 5 min with weighted tin / tin foil inside to prevent bubbling. Take weight out and cook for another 5 - 7 minutes(not brown!) pull out and decrease heat to 350 F.", "Innards: bacon cooked on low in order to crisp well.", "Cut onion in small pieces and partially sautee in small amount of bacon grease.", "Combine eggs, milk, butter, and flour in a bowl and whisk until flour is not lumpy.", "Layer all ingredients in tin (sprinkle some bacon bits on top for prettiness). Bake for 45 minutes at 350 F"
    ]
  },
  cornBread: {
    title: "CORN BREAD",
    tempTimeYield: '425F for 20-25 min',
    ingredients: [
      "1 egg",
      "1 cup milk",
      "1 / 3 cup oil",
      "Whisk above together and add dry all at once:",
      "1 cup flour",
      "1 cup cornmeal",
      "¼ cup sugar",
      "1 tsp salt",
      "1 ½ T baking powder"
    ],
    directions: [ "Mix until just moistened. Pour into 9x9 greased pan. Bake at 425 for 20 - 25 min, or until golden on top."
    ]
  },
  chickenEnchiladas: {
    title: "Chicken Enchiladas",
    tempTimeYield: 'Makes 10',
    ingredients: [
      '1 28 oz can whole tomatoes (blend very slightly) or use crushed tomatoes',
      '1 8 oz can tomato sauce',
      '3 T water',
      '¾ tsp chili powder',
      '½ tsp salt',
      '2 cup cut up cooked chicken',
      '¾ to 1 cup sour cream or yogurt',
      '1 16 oz can black beans (Caribbean style, drained lightly, but not rinsed)',
      '1 ¼ cup cheddar cheese grated (save ½ for top)',
      '10 flour tortillas'
    ],
    directions: [ 'Mix tomatoes, tomato sauce, water, chili powder, and salt together; pour 1/3 over 9x13 pan. Then combine chicken, sour cream/yogurt, beans, and cheese.', 'Spoon chicken mixture evenly into 10 tortillas. Roll tightly and put into pan. Pour the rest of sauce on top. Bake covered 350 for 20 min. Sprinkle rest of cheese and bake 10 more min. uncovered.', 'Garnish with guacamole, lettuce, olives, sour cream, tomatoes, cheese, salsa, tortilla chips.', 'For guests add: hot sauce, green onions, chiles'
    ]
  }

};

  // alphebetize the object
  const alphebetizedRecipes = {};
  Object.keys(recipes).sort().forEach(function(key) {
  alphebetizedRecipes[key] = recipes[key];
});

export default alphebetizedRecipes;
