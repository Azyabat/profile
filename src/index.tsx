import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider>
        <Route component={App} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
