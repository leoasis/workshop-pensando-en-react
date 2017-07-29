# 03 - JSX

Hasta ahora estuvimos creando elementos usando la función `React.createElement`. Seguramente ya estes pensando algo del tipo "Cómo les gusta escribir a los de React", o "No hay una forma más corta de hacer eso?", o "Qué ganas de comer una buena 🍔". Si estás pensando algo parecido a las primeras dos, este capítulo viene a contarte que existe otra forma de hacer eso mismo, con algo llamado JSX. JSX es una extensión al lenguaje JavaScript que permite escribir elementos de React de una forma más concisa y familiar. La sintaxis es muy similar a escribir HTML.

Este ejemplo:

```js
const el = React.createElement('div', { className: 'main' },
  React.createElement('p', null, 'Haz click en el botón de abajo.'),
  React.createElement(MyButton, { color: 'blue', size: 10 }, 'Click!')
)
```

Se escribe así en JSX:

```jsx
const el = (
  <div className="main">
    <p>Haz click en el botón de abajo.</p>
    <MyButton color="blue" size={10}>
      Click
    </MyButton>
  </div>
)
```

Cosas interesantes a notar:

* Los atributos de tipo string se ponen como si fueran atributos de HTML. Para los que no son de tipo string, se utilizan las `{}`.
* Lo que poníamos como tercer parámetro para el contenido del elemento, es el contenido del tag en JSX.
* Hay una convención en JSX que transforma a string el primer parámetro de `React.createElement` si el tag empieza con minúscula, y a tipo componente si empieza en mayúscula.

Es importante el último punto ya que si yo defino un componente así:

```js
function miComponente(props) { return ... }
```

e intento utilizarlo así:

```jsx
const el = <miComponente ... />;
```

No vamos a obtener el resultado esperado ya que eso va a ser equivalente a:

```js
const el = React.createElement('miComponente', ...);
```

Lo cual es incorrecto, porque eso representa al elemento `'miComponente'` del DOM, el cual no existe. Lo que debemos hacer en este caso es cambiar el nombre del componente que creamos, y hacer que empiece con mayúscula:

```js
function MiComponente(props) { return ... }
```

Para más información sobre la sintaxis de JSX, te recomiendo que leas esta página en la documentación de React: [https://facebook.github.io/react/docs/jsx-in-depth.html](https://facebook.github.io/react/docs/jsx-in-depth.html).

## Cómo usar JSX en nuestra app

Si JSX no es JavaScript estándar, cómo lo podemos utilizar en los navegadores? Para esto utilizamos la libreria [Babel](http://babeljs.io) que, entre otras cosas, convierte JSX a JavaScript estándar (transformándo el JSX a llamadas a `React.createElement`) para que lo podamos utilizar en los navegadores.

En los ejercicios del Workshop, ya tenemos Babel y ya estará correctamente configurado para entender JSX. Cuando hagas tu propia app, te recomiendo que utilices [create-react-app](https://github.com/facebookincubator/create-react-app), que entre otras cosas también te configura Babel para poder usar JSX sin que tengas que hacer nada. De hecho, el codigo del workshop se creó con `create-react-app`!

## Ejercicios

Ya estás listo para hacer [el ejercicio 3](http://localhost:3000/fundamentos/3).


[Siguiente >>](./04-set-state-y-re-render.md)
