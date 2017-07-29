# 04 - setState y re-render

Hasta ahora con React solo sabemos dibujar algo estático, que no cambia nunca. Esto no es muy útil, y para hacer algo asi quizás sea mejor usar directamente HTML. Si queremos usar React es porque queremos hacer aplicaciones dinámicas. Pero, cómo hacemos eso?

Justamente la idea de React es que sea muy simple! Cuando queremos que cambie la UI, simplemente redibujamos todo!

Este ejemplo muestra una fecha que se actualiza cada segundo:

```js
function Fecha(props) {
  return (
    <div>
      <h1>Fecha</h1>
      <p>La fecha actual es: {props.fecha}</p>
    </div>
  );
}

const el = document.getElementById('app');

function render() {
  const fecha = new Date();
  ReactDOM.render(<Fecha fecha={fecha} />, el);
}

render();

setInterval(render, 1000);
```

Definimos un componente `Fecha` que dibuja la fecha pasada por prop. Luego definimos la función `render` que llama a `ReactDOM.render` con el componente `Fecha` pasando la fecha actual. Ejecutamos la funcion `render` para que se dibuje el estado inicial. Luego iniciamos un intervalo cada 1 segundo y redibujamos la aplicación, pasando una nueva fecha cada vez.

Conceptualmente, redibujamos la aplicación cada 1 segundo. Pero React internamente realiza un proceso de "diffing" que compara lo que tenía dibujado hasta el momento con la nueva representación de lo que hay que dibujar, y encuentra los lugares donde hay cambios. Con esa información, realiza las operaciones en el DOM para cambiar sólo lo necesario. Es decir, no reemplaza el DOM entero cada vez, sino que solo modifica lo que cambia. Eso permite que el modelo de "redibujar cada vez que hay cambios" sea posible, ya que si tuviéramos que redibujar todo realmente, tendríamos serios problemas de performance y de usabilidad.

## setState

Cuando tenemos una app pequeña, o el estado lo tenemos fuera de React y se lo vamos a pasar al componente raíz como props, redibujar toda la aplicación es una solución válida. Sin embargo, tanto por cuestiones de performance, como por cuestiones de practicidad y de _qué componente es el dueño de la información_ (algo que veremos en profundidad en los pasos de Pensando en React), tenemos que empezar a redibujar partes de la UI.

Para esto, tenemos un tipo nuevo de dato en React, el `state`, que es el estado interno de un componente. A diferencia de las `props` que conocemos, el `state` es estado que controla un componente, y es él el encargado de indicar cuando se modifica.

Cada vez que modifiquemos el estado de un componente, React re-dibujará ese componente (y el subárbol de componentes que forma con sus hijos). Es como si al modificar el estado, React hiciera un nuevo `render` pero comenzando desde ese componente.

Para poder usar el `state`, tenemos que tener un componente de tipo _clase_. Un componente definido como función, no tiene acceso a esta funcionalidad, ya que por definición es _stateless_ o sin estado.

Teniendo una clase que define un componente, podemos tener estado interno simplemente inicializando el estado en el constructor de la clase:

```js
class MiComponente extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }
}
```

El `state` debe ser un objeto, pero las propiedades que definimos en ese objeto pueden ser del tipo que querramos. Al igual que las `props`, podemos acceder a `this.state` en el `render` del componente, para utilizar la información en el estado para dibujar:

```js
class MiComponente extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }
  render() {
    return <div>El contador es {this.state.contador}</div>
  }
}
```

También como con las `props`, es importante aclarar que React espera que tratemos al `state` como sólo lectura en el `render`. Esto es así porque por definición, el método `render` debe representar como se debe ver el componente en todo momento, y React es libre de llamar a este método cuando él quiera. Si modificamos el `state` dentro de esta función, ese contrato que React nos pide lo estaríamos rompiendo, y estaríamos haciendo que haya cambios no intencionados en nuestra UI cuando a React se le ocurra volver a dibujar nuestro componente.

Para poder modificar el estado, no debemos hacerlo directamente modificando `this.state` o alguna de sus propiedades. Ya que React debe poder detectar el cambio y redibujar el componente, nos brinda un método de la clase que se llama `setState` para poder modificar el estado.

Tenemos dos formas de utilizar `setState`. Cuando el valor del nuevo estado no depende del estado anterior, podemos usar un objeto que especifica las propiedades y valores que debe tener el nuevo estado:

```js
  this.setState({
    propiedad1: valor1,
    propiedad2: valor2,
    ...
  });
```

No es necesario que definamos todas las propiedades del estado en este objeto, solo con definir las propiedades _que cambian_ es suficiente, React hará un _merge_ de este nuevo objeto con el estado actual.

También hay otra forma de utilizar el `setState` que es pasandole una función por parámetro. Esta funcion recibe el estado y props actuales y debe devolver el siguiente estado. Esta forma es útil cuando tenemos que actualizar el estado dependiendo de un valor anterior.

```js
  this.setState((state, props) => ({
    propiedad1: state.propiedad1 + 1,
    propiedad2: state.propiedad2.concat(props.foo),
    ...
  });
```

> En este ejemplo utilizamos las [arrow functions de ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions).

Por qué no podemos utilizar la primer forma cuando queremos actualizar el estado con un valor que depende del estado anterior? Esto es así porque el método `setState` es potencialmente asincrónico. Es decir, no siempre modifica el `state` inmediatamente, sino que React lo hará en algún momento posterior. Esto le permite a React tener más control sobre la actualización de la UI y permite unir varios cambios de estado en uno solo, re-dibujando la UI una sola vez.

Para entender un poco más la diferencia, veamos un ejemplo:

```jsx
// console.log(this.state.valor) => 0

// esto encola un nuevo estado { valor: 1 }
this.setState({ valor: this.state.valor + 1 });
// esto encola un nuevo estado { valor: 1 }
this.setState({ valor: this.state.valor + 1 });
// esto encola un nuevo estado { valor: 1 }
this.setState({ valor: this.state.valor + 1 });

// console.log(this.state.valor) => 0
// `this.setState` es asincrónico, el valor todavía no se actualizó

// dentro del `render`:
// console.log(this.state.valor) => 1
// Arriba hicimos 3 `setState`, pero los 3 con valor === 1
```

Cómo hacemos para obtener `this.state.valor === 3` en el `render`? Así:

```jsx
// console.log(this.state.valor) => 0

this.setState(state => ({ valor: state.valor + 1 }));
this.setState(state => ({ valor: state.valor + 1 }));
this.setState(state => ({ valor: state.valor + 1 }));

// console.log(this.state.valor) => 0
// `this.setState` es asincrónico, el valor todavía no se actualizó

// dentro del `render`:
// console.log(this.state.valor) => 3
// Arriba hicimos 3 `setState`, utilizando en cada uno el valor anterior
```

> Es muy importante que evites mutar directamente `this.state`, incluso aunque luego estes usando `this.setState`. En los próximos fundamentos, vamos a ver que React permite comparar los estados anteriores y actuales y actuar en consecuencia. Si mutamos el estado directamente en vez de asignar un valor nuevo con `this.setState`, la referencia del estado anterior sería la misma que la del nuevo, haciendo esta comparación imposible.

Finalmente, `this.setState`, en cualquiera de sus dos usos, admite un segundo parámetro, que es una función. Esta función se llamará una vez que React efectivamente haya modificado el estado y redibujado el componente. Es útil cuando queremos realizar cierta lógica cuando estamos seguros que ya se aplicó el nuevo estado:

```jsx
// console.log(this.state.valor) => 0
this.setState({ valor: 1 }, () => {
  // console.log(this.state.valor) => 1
});
```

Volvamos al ejemplo anterior y veamos como usar el `setState` allí:

```jsx
class MiComponente extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  render() {
    return (
      <div>
        El contador es {this.state.contador}
        <button onClick={() => {
          this.setState((prevState) => ({
            contador: prevState.contador + 1
          }));
        }}>Incrementar</button>
        <button onClick={() => {
          this.setState((prevState) => ({
            contador: prevState.contador - 1
          }));
        }}>Decrementar</button>
      </div>
    );
  }
}
```

En este ejemplo, estamos actualizando el estado `contador` cada vez que se hace click en los botones de incrementar o decrementar. Utilizamos una función como parámetro de `setState` porque la actualización depende del estado anterior de `contador`.

## Ejercicios

Ya estás listo para hacer [el ejercicio 4](http://localhost:3000/fundamentos/4).


[Siguiente >>](./05-eventos.md)