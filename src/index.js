import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import Heading from "./heading";
import List from "./list";
import Para from "./para";

let name = "manas";
let greet = getGreetMsg();
ReactDom.render(
  <div>
    {/* <h1 className="heading">{name}</h1> */}
    <Heading />

    <a href="https://manastripathi.is-a.dev/" target="_blank">
      <img src="https://picsum.photos/200/300" alt="random img"></img>
    </a>
    <br />
    <Para textInput="Neo" />
    <p1 className="para-style">Web-series</p1>

    <List />
    {/* <ol>
      <li>alpha</li>
      <li>beta</li>

      <li>{Math.random()}</li>
    </ol> */}
    <p1>{greet}</p1>
  </div>,
  document.getElementById("root")
);

function getGreetMsg() {
  let msg = "";
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  if (currentHour >= 0 && currentHour < 12) {
    msg = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    msg = "Good Afternoon";
  } else {
    msg = "Good Evening";
  }
  return msg;
}
