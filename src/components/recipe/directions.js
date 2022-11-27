import React from "react";
import "./styles.css";

const Directions = ({directions}) => {
return (
  <React.Fragment>
    <h4>Directions</h4>
    <ol className="pt3 pb6 pl5">
      {directions.map((direction, index) => {
        return (
          <li className="pb2" key={index}>
            {direction}
          </li>
        );
      })}
    </ol>
      </React.Fragment>
  );
};

export default Directions;
