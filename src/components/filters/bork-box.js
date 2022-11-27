import React from "react";
import "../styles/index.css";
const BorkBox = ({ setBorked, isBorked }) => {
  return (
    <div className="checkbox">
      <label className="text-white md-font cursor-pointer" htmlFor="borked">
        Börk börk börk!
      </label>
      <input
        type="checkbox"
        id="borked"
        name="borked"
        onChange={() => setBorked(!isBorked)}
      ></input>
    </div>
  );
};

export default BorkBox;
