import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Ex1 from "./1";
import Ex2 from "./2";
import Final from "./final";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "./index.css";

ReactDOM.render(
  process.env.NODE_ENV === "production"
    ? <Final />
    : <BrowserRouter>
        <Switch>
          <Route path="/1" component={Ex1} />
          <Route path="/2" component={Ex2} />
          <Route path="/final" component={Final} />
          <Route render={() => <Redirect to="/1" />} />
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
