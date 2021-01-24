import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MuiThemeProvider>
    , document.getElementById("root")
  </ApolloProvider>
);
