import React from "react";
import "./index";

function List() {
  return (
    <ol>
      <li>alpha</li>
      <li>beta</li>

      <li>{Math.random()}</li>
    </ol>
  );
}

export default List;
