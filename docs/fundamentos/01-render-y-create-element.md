# 01 - Render y create element

Agregamos React y ReactDOM con los scripts o con import

```
Tags script
```

```
npm install react react-dom

y luego

import React from 'react';
import ReactDOM from 'react-dom';
```

Por que necesitamos ReactDOM? Explicar que es porque React desacopla la representacion de la UI de como se dibuja, e incluso tiene distintas librerias para dibujar en distintos entornos, como mobile nativo (iOS y Android) con `react-native`, en el canvas con `react-canvas`, en dispositivos de realidad virtual, con `react-vr`, incluso en la terminal, con `react-blessed`. Todas ellas funcionan usando la libreria `react` como libreria para definir los elementos que componen la UI.

Luego utilizamos ReactDOM para dibujar un elemento de React en un elemento de DOM

```js
//Ejemplo de ReactDOM

const container = document.getElementById('app');

ReactDOM.render(/* ??? */, container);
```

Explicar los parametros de ReactDOM.

Pero, que es un elemento de React? Como lo obtenemos o creamos?

Un elemento de React es una representación de un fragmento de interfaz. Un elemento del DOM es un fragmento de interfaz válido para React, por lo cual es posible crear una representación de él. Para crear un elemento de React usamos `React.createElement`. Esta función recibe 3 parámetros (explicarlos).

```js
const el = React.createElement('h1', { title: 'Saludo al mundo' }, 'Hola mundo!');
```

Qué devuelve esa funcion? La representación del elemento. Es simplemente un objeto de Javascript con propiedades. Veamos como se ve


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

Hay muchas propiedades internas a React pero realmente las que importan son `type` y `props`. Type define el tipo de elemento que React va a crear, y props son los "atributos" de ese elemento. Podemos observar también que el tercer parámetro de `React.createElement` es en verdad una prop mas, con el nombre `children`.

Podemos ver que un elemento de React es efectivamente una _descripción_ de un elemento del DOM, y además es simplemente un objeto de Javascript. Como tal podemos manipularlo como cualquier otro objeto: guardarlo como una variable, pasarlo por parámetro a una función, guardarlo en una lista o como propiedad de otro objeto, etc.

## Ejemplos

Escribir ejemplos usando href, className y style y explicar

## Ejercicios

Link a los ejercicios