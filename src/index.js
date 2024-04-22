import React from "react";
import ReactDom from "react-dom";

import "./index.css";

let name = "manas";
ReactDom.render(
  <h1 className="heading">{name}</h1>,
  document.getElementById("root")
);
