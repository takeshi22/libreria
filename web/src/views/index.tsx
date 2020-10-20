import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Routes } from "./routes/routes";

const history = createBrowserHistory();

function Index() {
    return <Routes />;
}

ReactDOM.render(<Index />, document.getElementById("app"));
