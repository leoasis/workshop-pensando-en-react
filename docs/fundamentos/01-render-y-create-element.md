# 01 - Render y create element

Primero vamos a entender de qué esta compuesto React. Para trabajar en la web, necesitamos 2 librerías de React, `react` y `react-dom`.

La librería `react` es la librería genérica que nos permite crear elementos y componentes. La librería `react-dom` es la que nos da la función para dibujar esos elementos que creamos en un elemento de DOM. Esta librería convierte esos elementos que creamos con `react` en DOM, y se encarga de aplicar las modificaciones al DOM directamente en base a la definición de los elementos y componentes que definimos con `react`. Así como existe `react-dom`, también podemos dibujar en distintos entornos, como mobile nativo (iOS y Android) con `react-native`, en el canvas con `react-canvas`, en dispositivos de realidad virtual, con `react-vr`, incluso en la terminal, con `react-blessed`. Todas estas librerías funcionan usando la librería `react` como librería para definir los elementos que componen la UI.

Para dibujar algo en el navegador, utilizamos la función `ReactDOM.render`:
```js
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

ReactDOM.render(/* ??? */, container);
```

`ReactDOM.render` nos pide 2 parámetros. El segundo parámetro es el elemento de DOM destino donde queremos dibujar nuestra aplicación. El primer parámetro es un elemento de React, que es el que nosotros debemos crear para definir nuestra aplicación.

Pero, qué es un elemento de React? Cómo lo obtenemos o creamos?

Un elemento de React es una representación de un fragmento de interfaz. En el mundo web, un elemento del DOM es un fragmento de interfaz, por lo cual es posible crear una representación de él utilizando React. Para crear un elemento usamos `React.createElement`:

```js
import React from 'react';

const el = React.createElement('h1', { title: 'Saludo al mundo' }, 'Hola mundo!');
```

y para dibujarlo en el DOM lo usamos en el código de arriba:

```js
import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');
const el = React.createElement('h1', { title: 'Saludo al mundo' }, 'Hola mundo!');

ReactDOM.render(el, container);
```

`React.createElement` recibe 3 parámetros. El primer parámetro es el tipo de elemento que queremos crear. En este caso es un _string_, y puede ser cualquier tipo de elemento de DOM válido. Esto define qué tipo de elemento queremos que se dibuje. El segundo parámetro se llama `props`, y es un objeto que define las propiedades de este elemento. Al describir un elemento de DOM, estas propiedades se corresponden con los atributos y propiedades que un elemento puede tener en el DOM, como `title`, `className`, `style`, `href`, etc. El tercer parámetro (y los siguientes, ya que acepta cualquier cantidad de parámetros al final) es el _contenido_ del elemento. Es decir, contenido que será hijo del elemento que definimos. Este contenido puede ser del tipo que queramos, `string`, `number`, `array`, incluso otros elementos:

```js
import React from 'react';

const el = React.createElement('div', { style: { backgroundColor: 'green' }},
  React.createElement('h1', { title: 'Saludo al mundo' }, 'Hola mundo!'),
  React.createElement('p', null,
    'Esto es un ejemplo',
    React.createElement('a', { href: 'http://google.com/' }, 'Y esto un link')
  )
);
```

Los booleanos también están admitidos, pero no se dibujan. Esto es útil ya que permite hacer cosas del estilo de:

```js
const el = React.createElement('div', null,
  tieneAnterior && React.createElement('button', null, 'Anterior'),
  tieneSiguiente && React.createElement('button', null, 'Siguiente'),
);
```

> Algo a tener en cuenta en las `props` (el segundo parámetro) de elementos que representan DOM, es que esas propiedades **corresponden (en general) a las propiedades de los elementos de DOM, y NO a los atributos**. Es decir, que `style` es un objeto en lugar de ser un string de css como en HTML, con sus propiedades sin guion y con mayúsculas en las uniones de las palabras. También se usa `className` en lugar de `class`, ya que `className` es la propiedad en el DOM, y no el atributo de HTML. Lamentablemente no es totalmente consistente esta convención, ya que algunas `props` _sí_ corresponden a atributos (como los atributos ARIA). Para más información en las diferencias, podes leer [esta parte de la documentación oficial](https://facebook.github.io/react/docs/dom-elements.html).

Qué devuelve `React.createElement`? La representación del elemento. Es simplemente un objeto de Javascript con propiedades. Veamos como se ve:


```js
console.log(el); // =>

{
  $$typeof: Symbol(react.element),
  type: "h1",
  key: null,
  ref: null,
  props: {
    children: "Hola mundo!",
    title: "Saludo al mundo",
  }
  _owner: null
}
```

Hay muchas propiedades internas a React en este objeto, pero realmente las que nos importan ahora son `type` y `props`. Type define el tipo de elemento que React va a crear, y props son los "atributos" de ese elemento. Podemos observar también que el tercer parámetro de `React.createElement` es en verdad una prop mas, con el nombre `children`.

Podemos ver que un elemento de React es efectivamente una _descripción_ de un elemento del DOM, y además es simplemente un objeto de Javascript. Como tal podemos manipularlo como cualquier otro objeto: guardarlo como una variable, pasarlo por parámetro a una función, guardarlo en una lista o como propiedad de otro objeto, etc. Esto es muy potente, como vamos a ir viendo, y es una gran diferencia con otras librerías que manejan el concepto de "templates".

## Ejercicios
Ya estás listo para hacer [el ejercicio 1](http://localhost:3000/fundamentos/1).

[Siguiente >>](./02-componentes.md)
