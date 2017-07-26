import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Inicio from "./inicio";
import Final from "./final";

import Ex1 from "./fundamentos/01";
// import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "./index.css";

class Ex1Wrapper extends React.Component {

  componentDidMount() {
    Ex1(this.el);
  }

  shouldComponentUpdate() { return false; }

  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

function Foundation({ match }) {
  const exercises = [Ex1Wrapper];

  return (
    <Switch>
      {exercises.map((ex, index) =>
        <Route key={index} path={`/fundamentos/${index + 1}`} component={ex} />
      )}
      <Route
        render={() =>
          <div className="root">
            <h1>Workshop: Fundamentos</h1>
            <ul className="rootList">
              {exercises.map((ex, index) =>
                <li key={index}>
                  <Link to={`/fundamentos/${index + 1}`}>
                    Ejercicio {index + 1}
                  </Link>
                </li>
              )}
            </ul>
          </div>}
      />
    </Switch>
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
          <Route path="/fundamentos" component={Foundation} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/final" component={Final} />
          <Route component={Root} />
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();
