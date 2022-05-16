import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import "./assets/styles.css";
import client from "utils/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
