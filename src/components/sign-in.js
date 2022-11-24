import React, { useState } from "react";

const SignIn = ({ isBorked }) => {
  const [inputVal, setInputVal] = useState("");
  const signIn = () => {
    if (inputVal === 'drinkcoffee!') {
      sessionStorage.setItem("beep boop", "beep boop beep");
      window.location.reload()
      setInputVal("")
    }

  }
  return (
    <div>
      <form>
        <input
          type="password"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={isBorked ? "Serkrit Parsewerd" : "Secret Password"}
          />
        <button type="button" onClick={signIn}>
          {isBorked ? "Lerg Ine" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
