import React from "react";
import ReactDom from "react-dom";

import "./index.css";

let name = "manas";
ReactDom.render(
  <div>
    <h1 className="heading">{name}</h1>
    <p1>Web-series</p1>
    <ol>
      <li>alpha</li>
      <li>beta</li>

      <li>{Math.random()}</li>
    </ol>
  </div>,
  document.getElementById("root")
);
