import React from "react";
import "./styles.css";

const Directions = ({directions}) => {
/* logic until all directions written into are arrays */
  return directions[1] ? (
    <ol className="directionsForOL">
      {directions.map((direction, index) => {
        return (
          <li className="direction-li" key={index}>
            {direction}
          </li>
        );
      })}
    </ol>
  ) : (
      <p className="singleDirections">{directions[0]}</p>
    )
};

export default Directions;
