import React from 'react';
import './styles/index.css';

const BorkBox = ({ setBorked, isBorked }) => {
  return (
    <div className="relative">
      <div className="bork-box absolute">
        <input type="checkbox" id="borked" name="borked" onChange={() => setBorked(!isBorked)}>
        </input>
        <label className="text-cream xs-font" htmlFor="borked">
          Börk börk börk!
      </label>
      </div>
    </div>
  );
}

export default BorkBox;
