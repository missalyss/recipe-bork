import React from "react";
import pluralize from "pluralize";

export const UnitOfMeasure = ({ unit, qty }) => {
  return <span className="mr2">{qty > 1 ? pluralize(unit) : unit}</span>;
};
