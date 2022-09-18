import React, { useState } from "react";

const SignIn = ({ isBorked }) => {
  const [inputVal, setInputVal] = useState("");
  const signIn = () => {
    console.log('inputVal: ', inputVal);
    const data = JSON.stringify({pw: inputVal});
    fetch("/bff/signin", { method: "POST", body: data, credentials: 'same-origin', headers: { 'Content-Length': data.length,
    'Content-Type': 'application/json' }}).then((response) =>
      response.json()
    ).then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
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
