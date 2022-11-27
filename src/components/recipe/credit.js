import React from "react";
import { isEmpty } from "lodash";

const Credit = ({ credit, dearAlyssa }) => {
  const includeDearAlyssa = !isEmpty(dearAlyssa);

  return credit && credit?.text ? (
    <p className={`xs-font text-center ${includeDearAlyssa ? "pt4" : ""}`}>
      Thank you,{" "}
      {credit.url ? (
        <a
          className="text-blue"
          target="_blank"
          href={credit?.url}
          rel="noreferrer"
        >
          {credit.text}
        </a>
      ) : (
        credit.text
      )}
      , for this recipe!
    </p>
  ) : null;
};

export default Credit;
