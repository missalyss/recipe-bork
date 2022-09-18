import React from 'react';

import Nav from './nav';
import Search from './search';
import Filters from './filters';
import BorkBox from './bork-box';
import PieBox from './pie-box';


const Header = ({isBorked, setBorked, showPie, setShowPie, searchQuery, setSearchQuery, setMealTypeFilter, mealTypeFilter, setDietaryNeedsFilter, dietaryNeedsFilter, filteredRecipes, filteredResultCount}) => {

return (
        <>

        <div className='flex justify-evenly'>
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
        <Filters
          setMealTypeFilter={setMealTypeFilter}
          setDietaryNeedsFilter={setDietaryNeedsFilter}
          mealTypeFilter={mealTypeFilter}
          dietaryNeedsFilter={dietaryNeedsFilter}
          isBorked={isBorked}
        />
        <Nav recipes={filteredRecipes} />

        </>
)
}

export default Header;
