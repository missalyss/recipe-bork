import React from 'react';
import './styles/index.css';

const Filters = ({ setMealTypeFilter, setDietaryNeedsFilter }) => {
  return (
    <div className="flex align-center justify-center">
      <select className="search-box mr3" name="time-of-day" id="time-of-day" onChange={e => setMealTypeFilter(e.target.value)}>
        <option value="" defaultValue>Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="holiday">Holiday</option>
      </select>

      <select className="search-box" name="dietary-needs" id="dietary-needs" onChange={e => setDietaryNeedsFilter(e.target.value)}>
        <option value="" defaultValue>Dietary Needs</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="low-carb">Low Carb</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="lactose-free">Lactose Free</option>
      </select>
    </div>
  );
}

export default Filters;
