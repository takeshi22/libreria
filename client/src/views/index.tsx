import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function Index() {
  useEffect(() => {
    axios.get("http://localhost:5555/books")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("faild");
    });
  }, []);
  return <h1>welcome libreria app!!</h1>;
}

ReactDOM.render(<Index />, document.getElementById("app"));
