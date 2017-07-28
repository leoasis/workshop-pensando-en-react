import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { getAbsoluteFilePath } from "./util";
import Inicio from "./inicio";
import Final from "./final";

import Ex1 from "./fundamentos/01";
import Ex2 from "./fundamentos/02";
import Ex3 from "./fundamentos/03";
import { ejercicio4A, ejercicio4B } from "./fundamentos/04";
import Ex5 from "./fundamentos/05";
import Ex6 from "./fundamentos/06";
import Ex7 from "./fundamentos/07";
import Ex8 from "./fundamentos/08";
import Ex9 from "./fundamentos/09";

import Ex1Sol from "./fundamentos/soluciones/01";
import Ex2Sol from "./fundamentos/soluciones/02";
import Ex3Sol from "./fundamentos/soluciones/03";
import { ejercicio4A as ejercicio4ASol, ejercicio4B as ejercicio4BSol } from "./fundamentos/soluciones/04";
import Ex5Sol from "./fundamentos/soluciones/05";
import Ex6Sol from "./fundamentos/soluciones/06";
import Ex7Sol from "./fundamentos/soluciones/07";
import Ex8Sol from "./fundamentos/soluciones/08";
import Ex9Sol from "./fundamentos/soluciones/09";
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

function ExerciseLink({ to, children }) {
  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={ev => {
        ev.preventDefault();
        const href =
          "/__open-stack-frame-in-editor?fileName=" +
          window.encodeURIComponent(getAbsoluteFilePath(to));
        fetch(href);
      }}
    >
      {children}
    </a>
  );
}

function Foundation({ match }) {
  const exercises = [
    [exWithDOMElement(Ex1), exWithDOMElement(Ex1Sol)],
    [Ex2, Ex2Sol],
    [Ex3, Ex3Sol],
    [[exWithDOMElement(ejercicio4A), ejercicio4B], [exWithDOMElement(ejercicio4ASol), ejercicio4BSol]],
    [Ex5, Ex5Sol],
    [Ex6, Ex6Sol],
    [Ex7, Ex7Sol],
    [Ex8, Ex8Sol],
    [Ex9, Ex9Sol]
  ];

  return (
    <Switch>
      {exercises.map(([Ex, Sol], index) => [
        <Route
          key={0}
          path={`/fundamentos/${index + 1}`}
          exact
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
                <ExerciseLink to={`/src/fundamentos/${exNumber(index)}.js`}>
                  <b>
                    /src/fundamentos/{exNumber(index)}.js
                  </b>
                </ExerciseLink>. Abrilo en tu editor de texto.
              </div>
              <div style={{ padding: 10 }}>
                {Array.isArray(Ex)
                  ? Ex.map((Ex, index) => <Ex key={index} {...props} />)
                  : <Ex {...props} />}
              </div>
            </div>}
        />,
        <Route
          key={1}
          path={`/fundamentos/${index + 1}/solucion`}
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
                El archivo que corresponde a esta solución del ejercicio es{" "}
                <ExerciseLink to={`/src/fundamentos/soluciones/${exNumber(index)}.js`}>
                  <b>
                    /src/fundamentos/soluciones/{exNumber(index)}.js
                  </b>
                </ExerciseLink>. Abrilo en tu editor de texto.
              </div>
              <div style={{ padding: 10 }}>
                {Array.isArray(Sol)
                  ? Sol.map((Sol, index) => <Sol key={index} {...props} />)
                  : <Sol {...props} />}
              </div>
            </div>}
        />
      ])}
      <Route
        render={() =>
          <div className="root">
            <h1>Workshop: Fundamentos</h1>
            <ul className="rootList">
              {exercises.map((ex, index) =>
                <li key={index}>
                  <Link to={`/fundamentos/${index + 1}`}>
                    Ejercicio {index + 1}
                  </Link>{" "}
                  <Link to={`/fundamentos/${index + 1}/solucion`}>
                    <span
                      role="img"
                      aria-label="solución"
                      style={{ fontSize: ".6em", fontStyle: "italic", color: '#a0a0a0' }}
                    >
                      (👀 solución)
                    </span>
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
