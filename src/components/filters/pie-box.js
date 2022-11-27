import React from "react";
import "../styles/index.css";
const PieBox = ({ setShowPie, showPie }) => {
  return (
    <div className="checkbox piebox">
      <label className="cursor-pointer text-white lg-font" htmlFor="showPie">
        🥧
      </label>
      <input
        checked={showPie}
        type="checkbox"
        id="showPie"
        name="showPie"
        onChange={() => setShowPie(!showPie)}
      ></input>
    </div>
  );
};

export default PieBox;
