# 08 - Refs

Mientras nos mantengamos en el mundo de React, vamos a poder abstraernos de las complicaciones del DOM, y vamos a poder razonar sobre nuestra aplicación más fácil, con las reglas y restricciones que su modelo de componentes nos da. Sin embargo, sabemos que el mundo no es ideal, y hay situaciones donde tenemos que tener una forma de acceder al DOM para realizar acciones de forma imperativa, o incluso para utilizar alguna librería que ya funciona con el DOM directamente, y no queremos reescribirla en React.

Por suerte, React nos da una forma para acceder a esos elementos, para poder hacer el trabajo sucio. La forma que tiene es utilizando lo que llama `ref`s.

Así como las `key`, `ref` es una prop "especial" que se le asigna a los elementos de React, pero que no se pueden acceder desde las props que recibe el componente.

Veamos un ejemplo. Supongamos que queremos acceder a un input para hacerle foco cuando el componente que estamos creando se monta (podríamos hacerlo con el atributo `autoFocus` que ya tiene el DOM, pero esto es a modo ilustrativo):

```jsx
class Formulario extends React.Component {
  render() {
    return (
      <form>
        <input type="text" ref={(el) => {
          if (el) {
            el.focus();
          }
        }} />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
```

Ahi podemos ver el uso de `ref`. El valor de la prop debe ser una función. Esta función recibe como parámetro el elemento de DOM que es representado por este elemento de React.

Tenemos que asegurarnos que el parámetro no sea `null`, por eso usamos el `if`. React nos enviará el elemento cuando éste se monte, y nos enviará `null` cuando se desmonte. Esto nos sirve para eliminar la referencia si la utilizamos en algun lado como una variable de instancia.

Una vez que tenemos el elemento, podemos utilizarlo como queramos. En particular en el ejemplo anterior, llamamos al método `focus()` del `input`, que es un método nativo del DOM.

En general se guarda el elemento como variable de instancia, para poder ser utilizado en eventos del ciclo de vida, o eventos de algún componente:

```jsx
class Formulario extends React.Component {
  componentDidMount() {
    this.inputEl.focus();
  }

  render() {
    return (
      <form>
        <input type="text" ref={(el) => {
          this.inputEl = el;
        }} />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
```

Este ejemplo hace exactamente lo mismo que el anterior, pero utilizando el evento del ciclo de vida cuando el componente se monta, y guardando el elemento que me da el `ref` en una variable de instancia.

## refs de componentes propios

El ejemplo anterior muestra lo que pasa cuando usamos `ref` en un elemento "nativo" (que representa un elemento de DOM). Pero también podemos usar un `ref` en un componente no nativo. En este caso lo que recibiremos como parámetro en la función de `ref` será la instancia del componente. Es decir que cualquier método que posea el componente, podrá ser llamado en forma imperativa.

Veamos un ejemplo para ver como funciona:

```jsx
class CampoTexto extends React.Component {
  hacerFoco() {
    this.inputEl.focus();
  }

  render() {
    return (
      <input type="text" ref={(el) => {
        this.inputEl = el;
      }} />
    );
  }
}

class Formulario extends React.Component {
  componentDidMount() {
    this.campoTextoEl.hacerFoco();
  }

  render() {
    return (
      <form>
        <CampoTexto ref={(el) => {
          this.campoTextoEl = el;
        }} />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
```

En este ejemplo creamos un componente `CampoTexto` que encierra el `input`. Utiliza el mismo `ref` de antes sobre el input, pero el foco lo hace en un método que define llamado `hacerFoco`. Con este cambio, el `Formulario` ahora debe llamar a ese método en el `componentDidMount` en lugar de `focus()`, ya que ahora tiene un `ref` del componente `CampoTexto` y no de `input`.

## refs y componentes tipo función

Dado que el `ref` devuelve la instancia del componente, y que los componentes de tipo función no tienen una instancia asociada, **no podemos usar `ref`s en componentes de tipo función**.

## Ejercicios

Ya estás listo para hacer [el ejercicio 8](http://localhost:3000/fundamentos/8).


[Siguiente >>](./09-elementos-de-formulario.md)