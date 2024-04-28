import React from "react";
import SignIn from "../sign-in";
import RecipeHeading from "./heading";

const SecretRecipe = ({ id, title }) => {
  return (
    <div className="bg-white radiusMd p4 mb3">
      <RecipeHeading id={id} title={title} />
      <h3 className="red">Shhh! Eets zee femeely receepes!</h3>
      <p>To see this recipe, enter the super secret password!</p>
      <SignIn />
    </div>
  );
};

export default SecretRecipe;
