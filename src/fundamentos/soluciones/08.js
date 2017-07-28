// Utilizar refs para auto enfocar un input y para animar
// un componente apenas la pagina se carga.
//
// 1. Asignar un `ref` en el `input` que se deberia auto enfocar.
//    Utilizar una variable de instancia de la clase para guardar
//    el elemento que nos da el `ref`.
// 2. Utilizar la variable de instancia en `componentDidMount` y
//    enfocar el elemento llamando al método `.focus()`.
// 3. Asignar un `ref` de la misma forma que en 1 pero para el
//    componente `FancyParagraph`.
// 4. Utilizarlo en `componentDidMount` y llamar al método
//    `.animate()` de la instancia de ese componente.

import React from "react";

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default class Ejercicio8 extends React.Component {
  componentDidMount() {
    this.input.focus();
    this.fancyParagraph.animate();
  }

  render() {
    return (
      <div>
        <input
          ref={el => {
            this.input = el;
          }}
          placeholder="Yo me debería auto enfocar"
          size={30}
        />
        <FancyParagraph
          ref={el => {
            this.fancyParagraph = el;
          }}
        >
          Yo debería moverme hacia{" "}
          <span role="img" aria-label="allá">
            👉
          </span>
        </FancyParagraph>
      </div>
    );
  }
}

class FancyParagraph extends React.Component {
  constructor() {
    super();
    this.state = { animated: false };
  }
  animate() {
    setTimeout(() => {
      this.setState({
        animated: true
      });
    }, 0);
  }

  render() {
    return (
      <p
        style={{
          transition: "transform 2s",
          transform: this.state.animated ? "translateX(50px)" : ""
        }}
      >
        {this.props.children}{" "}
        <span
          style={{
            transition: "opacity 2s",
            opacity: this.state.animated ? 1 : 0
          }}
        >
          (Bravo!!{" "}
          <span role="img" aria-label="aplausos">
            👏👏👏
          </span>)
        </span>
      </p>
    );
  }
}
