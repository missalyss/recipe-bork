import React from "react";
import Button from "../../pattern-lib/components/button";
import "../styles/index.css";

const ClearFilters = ({
  setSearchQuery,
  setMealTypeFilter,
  setDietaryNeedsFilter,
  setShowPie,
}) => {
  return (
    <Button
      onClick={() => {
        setSearchQuery("");
        setMealTypeFilter("");
        setDietaryNeedsFilter("");
        setShowPie(false);
      }}
      visualStyle="link"
      className="text-white"
    >
      Clear all filters
    </Button>
  );
};

export default ClearFilters;
