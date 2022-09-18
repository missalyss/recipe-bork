import React from 'react';
import '../styles/index.css';
const PieBox = ({ setShowPie, showPie }) => {
  return (
      <div className="checkbox piebox">
        <input type="checkbox" id="showPie" name="showPie" onChange={() => setShowPie(!showPie)}>
        </input>
        <label className="cursor-pointer text-cream lg-font" htmlFor="showPie">
          🥧
      </label>
      </div>
  );
}

export default PieBox;
