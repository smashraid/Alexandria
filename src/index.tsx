import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

import "../assets/style.scss"

let catalogLocation : [number, string, boolean] = [1, "Test", true];
catalogLocation[5] = "Test2";
catalogLocation[3] = "Test2";
catalogLocation[4] = 10;

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById("example")
);
