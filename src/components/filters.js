import React from 'react';
import './styles/index.css';

const Filters = ({ setMealTypeFilter }) => {
  return (
    <div className="flex align-center justify-center">
      <select className="search-box" name="time-of-day" id="time-of-day" onChange={e => setMealTypeFilter(e.target.value)}>
        <option value="" defaultValue>Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="holiday">Holiday</option>
      </select>
    </div>
  );
}

export default Filters;
