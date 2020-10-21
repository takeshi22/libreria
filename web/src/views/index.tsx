import * as React from "react";
import * as ReactDOM from "react-dom";

import { Routes } from "./routes";


function Index() {
    return <Routes />;
}

ReactDOM.render(<Index />, document.getElementById("app"));
