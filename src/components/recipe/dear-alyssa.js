import React from "react";

const DearAlyssa = ({ dearAlyssa}) => {
  return (
        <div className="text-left mt4 text-red sm-font pl2 pr2">
          <p>
            <em>Dear Alyssa,</em>
          </p>
          {dearAlyssa.map((paragraph, i) => (
            <p key={i}>
              <em>{paragraph}</em>
            </p>
          ))}
          <p>
            <em>Love, Alyssa</em>
          </p>
        </div>
  );
};

export default DearAlyssa;
