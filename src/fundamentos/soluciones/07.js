// Implementar un componente `Counter` que dibuja un contador
// que aumenta con el paso del tiempo.
// El componente recibe como prop una propiedad `counting`
// que indica si el componente debe estar contando o no.
// El componente ya tiene implementados dos métodos,
// `startCounting` y `stopCounting` para iniciar o detener el
// conteo. Debemos utilizar estos métodos en los eventos del
// ciclo de vida para hacer que el componente funcione adecuadamente.
//
// 1. Implementar el evento de `componentDidMount` para comenzar a contar
//    cuando el componente se monta y la prop `counting` está en true.
//    Probar la que si el segundo botón dice "Comenzar" y aprentamos "Reset",
//    el contador no debería avanzar. Si el segundo botón dice "Detener" y apretamos
//    "Reset", el contador deberia avanzar.
// 2. Luego de apretar "Comenzar" y "Reset" al menos una vez, observar los warnings
//    que nos da React. Esto es porque no estamos deteniendo el contador antes de
//    desmontar el componente. Implementar el evento `componentWillUnmount` para
//    detener el conteo con `stopCounting`. Observar que ahora no se emiten los warnings.
// 3. Ahora el contador debería comenzar y detenerse sin tener que apretar "Reset".
//    Para esto implementamos `componentDidMount`. Debemos detectar cuando estamos
//    deteniendo el contador (cuando pasamos de `counting === true` a `counting === false`),
//    y en ese caso llamar a `stopCounting`. Asimismo debemos detectar cuando
//    estamos comenzando el contador (cuando pasamos `counting === false` a
//    `counting === true`), y en ese caso llamar a `startCounting`.
//    Utilizar el parametro `prevProps` de `componentDidUpdate` para comparar el valor
//    actual de las props con el valor anterior.
//    Verificar que el comportamiento es el correcto.
// 4. Finalmente, queremos detectar cuantas veces estamos deteniendo el contador, y
//    guardar esa información en el estado local para que se dibuje adecuadamente.
//    Utilizamos `componentWillReceiveProps` para detectar cuando pasamos de
//    `counting === true` a `counting === false`, y actualizamos el estado en la propiedad
//    `stoppedCount`, incrementandolo en 1.
//    Utilizar el parámetro `nextProps` de `componentWillReceiveProps` para comparar
//    el valor actual de las props con el valor siguiente.
//    Verificar el comportamiento comenzando y deteniendo el contador varias veces.

import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      stoppedCount: 0
    };
  }

  componentDidMount() {
    if (this.props.counting) {
      this.startCounting();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.counting && this.props.counting) {
      this.setState(state => ({ stoppedCount: state.stoppedCount + 1 }));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.counting && !prevProps.counting) {
      this.startCounting();
    } else if (!this.props.counting && prevProps.counting) {
      this.stopCounting();
    }
  }

  componentWillUnmount() {
    this.stopCounting();
  }

  startCounting() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }));
    }, 100);
  }

  stopCounting() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <span role="img" aria-label="reloj">
          ⏰
        </span>{" "}
        <b>{this.state.count}</b>{" "}
        {this.state.stoppedCount > 0 &&
          <p>
            {this.state.stoppedCount > 5
              ? "Che, ya me detuviste más de 5 veces!!!"
              : this.state.stoppedCount === 1
                ? "Me detuviste 1 vez"
                : `Me detuviste ${this.state.stoppedCount} veces`}
          </p>}
      </div>
    );
  }
}

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default class Ejercicio7 extends React.Component {
  constructor() {
    super();

    this.state = {
      key: 0,
      counting: false
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleCountingClick = this.handleCountingClick.bind(this);
  }

  handleReset() {
    this.setState(state => ({
      key: state.key + 1
    }));
  }

  handleCountingClick() {
    this.setState(state => ({
      counting: !state.counting
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleCountingClick}>
          {this.state.counting ? "Detener" : "Comenzar"}
        </button>
        <br />
        <br />
        <Counter key={this.state.key} counting={this.state.counting} />
      </div>
    );
  }
}
