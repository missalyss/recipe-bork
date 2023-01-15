import React from "react";
import ReactDOM from "react-dom";
import "./pattern-lib/styles/index.css";
import "./pattern-lib/styles/font.css";
import "./pattern-lib/styles/color.css";
import "./pattern-lib/styles/flex.css";
import "./pattern-lib/styles/misc.css";
import "./pattern-lib/styles/padding-margin.css";
import HomePage from "./components";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<HomePage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
