import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import DrumMachine from "./drumMachine.js";

// tell React to render App component at the DOM elment with the id of root in index.html
//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<DrumMachine />,document.getElementById("root"));
