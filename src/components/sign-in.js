import React, { useState } from "react";

const SignIn = ({ isBorked }) => {
  const [inputVal, setInputVal] = useState("");
  const signIn = () => {
    fetch("/bff/signin", { method: "POST", body: inputVal }).then((response) =>
      response.json()
    );
  };
  return (
    <div>
      <form>
        <input
          type="text"
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
