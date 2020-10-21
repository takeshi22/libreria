import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { BookIndex } from "./pages/BooksIndex";
import { NewCreateBook } from "./pages/NewCreateBook";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/books" component={BookIndex} />
                <Route path="/new" component={NewCreateBook} />
            </Switch>
        </BrowserRouter>
    );
}
