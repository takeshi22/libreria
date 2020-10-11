import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function Index(){
  return (
    <h1>welcome libreria app!!</h1>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById("app")
)