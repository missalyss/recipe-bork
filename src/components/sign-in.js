import React, { useState } from "react";
import Button from "../pattern-lib/components/button";
const CURRENT_PASSWORD = "primedirective";

const SignIn = ({ isBorked }) => {
  const [inputVal, setInputVal] = useState("");
  const signIn = () => {
    if (inputVal === CURRENT_PASSWORD) {
      sessionStorage.setItem("beep boop", "beep boop beep");
      window.location.reload();
      setInputVal("");
    }
  };
  return (
    <React.Fragment>
      <input
        type="password"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder={isBorked ? "Serkrit Parsewerd" : "Secret Password"}
      />
      <Button type="button" onClick={signIn}>
        {isBorked ? "Lug In" : "Log In"}
      </Button>
    </React.Fragment>
  );
};

export default SignIn;
