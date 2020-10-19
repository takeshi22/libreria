import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { BookIndex } from "../pages/books";

const history = createBrowserHistory();

export const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/">
                    <BookIndex />
                </Route>
            </Switch>
        </Router>
    );
}
