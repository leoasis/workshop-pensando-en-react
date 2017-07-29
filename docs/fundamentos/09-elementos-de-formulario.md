# 09 - Elementos de formulario

Existen dos formas de utilizar los componentes interactivos de formulario en React. Estas formas se pueden igualmente extrapolar a cualquier componente (incluso los que vos construyas!), no solo los de formulario, pero es interesante ver esos casos ya que difieren un poco de como estamos acostumbrados a trabajar con esos elementos sin React.

Los elementos de formulario en cuestión son todos aquellos que son interactivos dentro de un `<form>`, y manejan estado interno: `<input>`, `<textarea>`, `<select>` son los más comunes.

Para ver más en detalle las diferencias entre los elementos nativos y cómo se usan en React, te recomiendo que veas [la documentación sobre formularios](https://facebook.github.io/react/docs/forms.html). Igualmente, a continuación vamos a explicar los conceptos.

## Componentes no controlados

Comenzamos por este modo, que es quizás el más intuitivo sin conocer React, pero en realidad no es el modo recomendado. Este modo es más performante (aunque puede llegar a ser una microoptimización), pero el otro es más claro y nos da más control.

En esta modalidad, el componente maneja el estado internamente, y cuando necesitamos conocer ese estado se lo pedimos en forma imperativa. Para esto generalmente hacemos uso de los `ref`s en React.

Veamos un ejemplo:

```jsx
class MiComponente extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.onFinish(this.inputEl.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(el) => { this.inputEl = el; }} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
```

En este caso, definimos un `ref` en el elemento `input` y luego accedemos al `value` del elemento de DOM que nos da el `ref` cuando hacemos _submit_ del formulario.

En esta modalidad, no estamos manejando el estado del `input`, sino que él lo controla internamente, almacenando y modificando el estado mientras el usuario tipea. Se lo pedimos cuando nos interesa saber el valor, que es cuando el formulario se esta por enviar.

## Componentes controlados

Existe otra forma de trabajar con estos elementos, que es la forma más declarativa y la que promueve React. Esta forma requiere mas código, pero resulta mucho mas explícito y claro para saber cuál es el camino que recorre el estado cuando hay interacción en nuestro componente.

El ejemplo equivalente al anterior pero usando componentes controlados sería el siguiente:

```jsx
class MiComponente extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  handleInputChange(ev) {
    this.setState({ inputValue: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.onFinish(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
```

En este modo, utilizamos el estado local de `MiComponente` para guardar el estado del texto. Ya que nosotros ahora somos los dueños del estado, le decimos al `input` en el `render` el valor que debe tener cada vez que se dibuja.

Para que efectivamente el valor cambie, ya que está dictado por el valor que guardamos en el `state`, debemos tener una forma de cambiarlo, y es mediante el evento `onChange`. Éste tiene un significado distinto al `onchange` del DOM, se comporta más bien como un `oninput`, ya que los cambios se disparan cada vez que el usuario tipea. Con este evento podemos modificar el estado del componente, lo cual hace que se redibuje el componente, dibujando el `input` con el nuevo estado.

Podemos ver en este modo, que aunque requiere más código, nos permite ver el flujo del estado de forma más clara con solo mirar el `render`. También nos da la oportunidad de manipular, interrumpir y formatear el estado, ya que tenemos control total del mismo.

Si bien es el modo que deberías usar en la mayoría de los casos, no está mal tampoco que quieras utilizar el modo no controlado en ciertos casos donde creas conveniente.

## Ejercicios

Ya estás listo para hacer [el ejercicio 9](http://localhost:3000/fundamentos/9).


[Siguiente >>](./10-outro.md)