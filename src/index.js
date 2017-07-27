import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Inicio from "./inicio";
import Final from "./final";

import Ex1 from "./fundamentos/01";
import Ex2 from "./fundamentos/02";
import Ex3 from "./fundamentos/03";
import Ex4 from "./fundamentos/04";
import Ex5 from "./fundamentos/05";
import Ex6 from "./fundamentos/06";
import Ex7 from "./fundamentos/07";
import Ex8 from "./fundamentos/08";
import Ex9 from "./fundamentos/09";
// import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "./index.css";

function exWithDOMElement(ex) {
  return class ExWrapper extends React.Component {
    componentDidMount() {
      ex(this.el);
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {
      return (
        <div
          ref={el => {
            this.el = el;
          }}
        />
      );
    }
  };
}

function exNumber(index) {
  const num = index + 1;
  return num < 10 ? "0" + num : String(num);
}

function Foundation({ match }) {
  const exercises = [
    exWithDOMElement(Ex1),
    Ex2,
    Ex3,
    Ex4,
    Ex5,
    Ex6,
    Ex7,
    Ex8,
    Ex9
  ];

  return (
    <Switch>
      {exercises.map((Ex, index) =>
        <Route
          key={index}
          path={`/fundamentos/${index + 1}`}
          render={props =>
            <div>
              <div
                style={{
                  background: "#e0e0e0",
                  padding: 10,
                  fontSize: ".8em",
                  marginBottom: 5,
                  fontStyle: "italic"
                }}
              >
                El archivo que corresponde a este ejercicio es{" "}
                <b>/src/fundamentos/{exNumber(index)}.js</b>. Abrilo en tu
                editor de texto.
              </div>
              <div style={{ padding: 10 }}>
                <Ex {...props} />
              </div>
            </div>}
        />
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
          <Link to="/fundamentos">Ejercicios de los Fundamentos</Link>
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
