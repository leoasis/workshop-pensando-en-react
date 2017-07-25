import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Inicio from "./inicio";
import Final from "./final";
// import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "./index.css";

function Foundation() {
  return (
    <div className="root">
      <h1>Workshop: Fundamentos</h1>
      <ul className="rootList">
        <li>
          <Link to="/fundamentos/1">Ejercicio 1</Link>
        </li>
        <li>
          <Link to="/fundamentos/2">Ejercicio 2</Link>
        </li>
      </ul>
    </div>
  );
}

function Root() {
  return (
    <div className="root">
      <h1>Workshop: Pensando en React</h1>
      <ul className="rootList">
        <li>
          <Link to="/fundamentos">Fundamentos</Link>
        </li>
        <li>
          <Link to="/inicio">Versión inicial (estática) de la aplicación</Link>
        </li>
        <li>
          <Link to="/final">Versión final de la aplicación</Link>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  process.env.NODE_ENV === "production"
    ? <Final />
    : <BrowserRouter>
        <Switch>
          <Route
            path="/fundamentos"
            render={() =>
              <Switch>
                <Route
                  path="/fundamentos/1"
                  render={() => <div>Ejericio 1</div>}
                />
                <Route
                  path="/fundamentos/2"
                  render={() => <div>Ejericio 2</div>}
                />
                <Route
                  path="/fundamentos/3"
                  render={() => <div>Ejericio 3</div>}
                />
                <Route component={Foundation} />
              </Switch>}
          />
          <Route path="/inicio" component={Inicio} />
          <Route path="/final" component={Final} />
          <Route component={Root} />
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();
