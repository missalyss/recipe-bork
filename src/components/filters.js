import React from 'react';
import './styles/index.css';

const Filters = ({ setMealTypeFilter, setDietaryNeedsFilter, isBorked }) => {
  const mealTypeStrings = {
    mealType: isBorked ? "Meel type-a" : "Meal Type",
    breakfast: isBorked ? "Breekffest" : "Breakfast",
    lunch: isBorked ? "Luonch" : "Lunch",
    dinner: isBorked ? "Deenner" : "Dinner",
    dessert: isBorked ? "Deesserte" : "Dessert",
    holiday: isBorked ? "Huleedey" : "Holiday"
  }

  const dietaryNeedsStrings = {
    dietaryNeeds: isBorked ? "DEEetery needs" : "Dietary Needs",
    vegetarian: isBorked ? "Fegeteriuon" : "Vegetarian",
    vegan: isBorked ? "Feguon" : "Vegan",
    lowCarb: isBorked ? "Luo Cerb" : "Low Carb",
    glutenFree: isBorked ? "Gluotee-a Free-a" : "Gluten Free",
    lactoseFree: isBorked ? "Lectuse-a Free-a" : "Lactose Free"
  }

  return (
    <div className="flex align-center justify-center">
      <select className="search-box mr3" name="time-of-day" id="time-of-day" onChange={e => setMealTypeFilter(e.target.value)}>
        <option value="" defaultValue>{mealTypeStrings.mealType}</option>
        <option value="breakfast">{mealTypeStrings.breakfast}</option>
        <option value="lunch">{mealTypeStrings.lunch}</option>
        <option value="dinner">{mealTypeStrings.dinner}</option>
        <option value="dessert">{mealTypeStrings.dessert}</option>
        <option value="holiday">{mealTypeStrings.holiday}</option>
      </select>

      <select className="search-box" name="dietary-needs" id="dietary-needs" onChange={e => setDietaryNeedsFilter(e.target.value)}>
        <option value="" defaultValue>{dietaryNeedsStrings.dietaryNeeds}</option>
        <option value="vegetarian">{dietaryNeedsStrings.vegetarian}</option>
        <option value="vegan">{dietaryNeedsStrings.vegan}</option>
        <option value="low-carb">{dietaryNeedsStrings.lowCarb}</option>
        <option value="gluten-free">{dietaryNeedsStrings.glutenFree}</option>
        <option value="lactose-free">{dietaryNeedsStrings.lactoseFree}</option>
      </select>
    </div>
  );
}

export default Filters;
