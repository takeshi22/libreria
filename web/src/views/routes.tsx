import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { BookIndex } from "./pages/BooksIndex";
import { UpdateBook } from "./pages/UpdateBook";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/books" component={BookIndex} />
                {/* <Route path="/books/new" component={UpdateBook} /> */}
            </Switch>
        </BrowserRouter>
    );
}
