import React from "react";
import "../styles/index.css";
const BorkBox = ({ setBorked, isBorked }) => {
  return (
    <div className="checkbox">
      <label className="white text-md cursor-pointer" htmlFor="borked">
        Börk börk!
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
