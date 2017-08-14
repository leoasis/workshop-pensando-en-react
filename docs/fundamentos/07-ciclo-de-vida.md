# 07 - Ciclo de vida de los componentes

El ciclo de vida de un componente es el tiempo desde que se dibuja en la UI hasta el momento en que se quita de la misma. Durante ese tiempo, al componente le van sucediendo distintas cosas de acuerdo a como se comporta la aplicación.

Los componentes tienen dos estados posibles: Montado y desmontado. Un componente se monta cuando React lo inserta en la UI. Asimismo, cuando React lo quita de la UI, el componente se desmonta.

Entre esos dos momentos, el componente esta en estado "montado", y es durante ese estado que puede ser actualizado, es decir, re-dibujado por React.

React nos permite enterarnos de estos eventos dentro de un componente, para poder hacer cosas cada vez que alguno de estos suceda.

Hay varios eventos a los cuales nos podemos suscribir. Te recomiendo que leas [la documentación oficial sobre el ciclo de vida de los componentes](https://facebook.github.io/react/docs/react-component.html). Los más útiles los veremos a continuación, pero primero, vamos a ver la forma de suscribirnos a ellos.

De nuevo, los componentes que tienen acceso a esta funcionalidad son los componentes de tipo clase. La forma de suscribirnos a los eventos es simplemente definiendo el método especifico para ese evento dentro de la clase.

Veamos los eventos más útiles:

## componentDidMount

```jsx
class MiComponente extends React.Component {
  componentDidMount() {
    // ...
  }
}
```

Se dispara cuando el componente ya fue montado en la UI. En este momento el componente ya esta dibujado, y todos los elementos de DOM que lo componen ya se encuentran agregados al DOM. Por eso, este evento es útil para cualquier inicialización que requiera el DOM (en el siguiente fundamento veremos como acceder al DOM en un componente de React).

También es útil este evento para comenzar llamadas para buscar datos por AJAX o algún otro mecanismo, como `localStorage`.

## componentWillReceiveProps

```jsx
class MiComponente extends React.Component {
  componentWillReceiveProps(nextProps) {
    // ...
  }
}
```

Se llama cada vez que el componente es re-renderizado porque el componente padre se re-dibujó y le envió nuevas props.

Es importante aclarar que las nuevas props no necesariamente son _distintas_. Si el componente padre se redibuja pero envía los mismos valores de props, este evento se llamará de todas formas. Es tarea nuestra hacer los chequeos para ver si alguna prop cambió o no en este evento.

Este evento es útil para modificar el estado interno con `setState` a partir de las props que se reciben.

## shouldComponentUpdate

```jsx
class MiComponente extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // return true/false
  }
}
```

No es técnicamente un evento, sino una forma que tenemos de indicar que no hace falta que se redibuje un componente. Podemos tener nuestra propia lógica para decir que no queremos redibujar el componente en base a las props y state actuales (que están en `this.props` y `this.state` respectivamente), y las siguientes (en `nextProps` y `nextState`). Debemos devolver un booleano indicando si queremos actualizar el componente o no.

Un uso común es hacer una comparación superficial de las `props` y `state` con las próximas, comparando por igualdad propiedad a propiedad. De hecho, este caso es tan común que React ofrece una forma más corta de hacer lo mismo, y es heredar de `React.PureComponent` en lugar de `React.Component`. Es decir que esto:

```jsx
class MiComponente extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState);
  }
}
```

Es equivalente a:

```jsx
class MiComponente extends React.PureComponent {
}
```

En este momento es útil recordar el problema que vimos en el [fundamento 5](./05-eventos.md#evitando-crear-funciones-en-el-render). Si creamos nuevas funciones y las pasamos como props, esta función que compara todas las props y state con las siguientes no nos servirá de mucho, ya que siempre nos dirá que cambiaron (porque las funciones son siempre nuevas, por ende distintas). Por eso es importante evitar crear nuevas funciones si efectivamente no cambia la lógica que se hace internamente, sobre todo para poder aplicar esta optimización en los componentes que veamos que están redibujándose innecesariamente.

## componentDidUpdate

```jsx
class MiComponente extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // ...
  }
}
```

Similar a `componentDidMount`, pero esta vez el componente ya se actualizó con las nuevas props que recibió del padre. La actualización ya se plasmó en la UI.

La utilidad es similar también, nos permite hacer nuevas llamadas remotas, o modificación del DOM en base a la actualización del componente.

Es importante recalcar que este evento no se dispara la primera vez que se dibuja el componente, sino que en su lugar se dispara solamente `componentDidMount`.

## componentWillUnmount

```jsx
class MiComponente extends React.Component {
  componentWillUnmount() {
    // ...
  }
}
```

Se dispara cuando el componente se está por quitar de la UI. Es útil para "limpiar lo que ensuciamos". Si agregamos event listeners o llamadas a `setTimeout` o `setInterval` en algún otro lado del componente, corresponde en este evento eliminar esos listeners y llamar a `clearTimeout` o `clearInterval`. También aquí deberíamos cancelar (o hacer que se ignoren) las llamadas remotas que aún no hayan terminado.

Si utilizamos algun plugin de jQuery o alguna librería que utiliza el DOM y requiere liberar recursos, aquí debe ser llamada.

## Ejercicios

Ya estás listo para hacer [el ejercicio 7](http://localhost:3000/fundamentos/7).


[Siguiente >>](./08-refs.md)