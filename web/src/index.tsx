import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Routes } from "./views/routes";

function Index() {
    const client = new ApolloClient({
        uri: "http://localhost:5555/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
        </ApolloProvider>
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));
serviceWorker.unregister();
