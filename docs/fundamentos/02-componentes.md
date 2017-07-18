# 02 - Componentes

Hasta ahora sabemos crear elementos que se corresponden con los elementos de DOM, como `'h1'`, `'p'` y `'a'`.

Pero en realidad no te expliqué todo cuando hablamos de el primer parámetro en `React.createElement`. En realidad, React permite no sólo un parametro `string` ahí, sino que también permite que le pasemos un _componente_.

Un componente es la forma que tenemos en React de crear nuestros propios bloques de UI. Una aplicación hecha con React consta de la composición de muchos componentes formando un árbol que comienza con un componente raíz, y llega hasta los componentes hoja que son los que representan los elementos de DOM. Salvo estos últimos, todos los demás son componentes que creamos nosotros (u obtenemos de alguna librería externa).

Ahora, cómo definimos un componente? Una forma es definiendo una función, que devuelve como valor de retorno un elemento de React:

```js
function HolaMundo() {
  return React.createElement('h1', null, 'Hola mundo');
}
```

Una vez definido el componente lo podemos utilizar así:

```js
const el = React.createElement(HolaMundo);
```

En lugar de un string con el nombre del tag en el primer parámetro, pasamos la referencia a la función. Con esto le decimos a React que queremos una representación de nuestro componente. Este elemento ya lo podemos utilizar de la misma forma que los elementos que creamos anteriormente. Podemos usarlo para dibujarlo en un elemento de DOM:

```js
const domEl = document.getElementById('app');

ReactDOM.render(React.createElement(HolaMundo), domEl);
```

O también podemos utilizarlo dentro de otra estructura de elementos de React:

```js
const el = React.createElement('div', null,
  React.createElement(HolaMundo),
  React.createElement('p', { style: { fontSize: 'bold' } },
    'Esto es un párrafo'
  )
);
```

## Props

Habíamos visto anteriormente que el segundo parámetro de `React.createElement` sirve para pasar lo que React llama "props", que se correspondían con los atributos y propiedades de los elementos del DOM.

Cuando definimos nuestros propios componentes, tenemos acceso a esos parámetros. De hecho, esos parámetros no necesariamente tienen que ser los atributos de elementos del DOM, pueden ser lo que nosotros queramos!

```js
React.createElement(HolaMundo, { mundo: 'Marte' });
```

Incluso no necesariamente tienen que ser de tipo string, sino que pueden ser del tipo que queramos, como números, objetos, listas, o fechas:

```js
React.createElement(HolaMundo, { mundo: 'Marte', fecha: new Date() });
```

La forma de acceder a esos parámetros es a traves del primer argumento de la función que define al componente:

```js
function HelloWorld(props) {
  // Obtengo el mundo que me pasaron como prop, sino 'mundo' por default.
  const mundo = props.mundo || 'mundo';
  return React.createElement('h1', null,
    'Hola ' + mundo + ', bienvenido al año ' + props.fecha.getFullYear()
  );
}
```

Es decir, que las props las vamos a recibir como un objeto en el primer argumento de la función, y accedemos a cada una de las props accediendo a las propiedades de ese objeto props. Por ejemplo, para acceder al valor que pasamos en `{ mundo: 'Marte', fecha: new Date() }` al crear el elemento, debemos utilizar `props.mundo` y `props.fecha` respectivamente.

Un detalle importante en React, es que las props deben ser tratadas como inmutables, es decir, NO podemos modificarlas asignandoles nuevos valores en sus propiedades, o asignando nuevas propiedades o eliminando alguna ya existente. El objeto `props` debe ser tratado como de sólo lectura. Si no lo hacemos, React nos mostrará un error, y el funcionamiento de React dejará de ser el esperado.

Esta limitación es útil para el mecanismo interno de React para actualizar la UI y para poder hacer ciertas optimizaciones y darse cuenta si los parámetros son distintos o no a lo largo del tiempo. Incluso a fines prácticos resulta útil esta limitación, ya que no tenemos que preocuparnos que esas props hayan sido modificadas en algun otro lado de nuestra aplicación donde las hayamos pasado por parámetro.

## Clases

Existe otra forma de crear componentes, y es mediante el uso de las clases. Un componente equivalente al anterior utilizando clases sería así:

```js
class HelloWorld extends React.Component {
  render() {
    // Obtengo el mundo que me pasaron como prop, sino 'mundo' por default.
    const mundo = this.props.mundo || 'mundo';
    return React.createElement('h1', null,
      'Hola ' + mundo + ', bienvenido al año ' + this.props.fecha.getFullYear()
    );
  }
}
```

Lo importante a notar:

* La clase debe heredar de `React.Component`
* La clase debe tener un método `render`. Ese método es prácticamente igual a si definiéramos el componente como función, pero utilizando `this.props` en lugar de las `props` recibidas por parámetro.
* El componente se utiliza _de la misma forma_ que si fuera definido como función:

```js
React.createElement(HolaMundo, { mundo: 'Marte', fecha: new Date() });
```

Ahora, para qué dos formas de definir componentes? Esta segunda forma nos permite acceder a más funcionalidad que la versión de función. En particular, los componentes tipo clase pueden tener _estado interno_, y tienen acceso a los _eventos del ciclo de vida_ para poder hacer distintas cosas cuando se disparan. Estos dos temas los veremos más adelante.


## Ejercicio

Usar aca un ejemplo del ejercicio final?