# 05 - Eventos

Ya sabemos enviar datos desde afuera hacia adentro, usando `props`. Ahora, cómo nos comunicamos a la inversa? Cómo hacemos para informarle a un componente padre que pasó algo en un componente hijo?

En el fundamento anterior, ya adelantamos algo en el ejemplo de `MiComponente`, donde hicimos algo del estilo:

```jsx
<button onClick={() => {
  this.setState((prevState) => ({
    contador: prevState.contador + 1
  }))
}}>Incrementar</button>
```

Quizás no te llamo tanto la atención, pero lo que hicimos es interesante. Te acordás cuando dijimos que una prop podía ser de cualquier tipo, no sólo strings? Bueno, una prop puede ser una función! Cuando pasamos como parámetro una función a un componente, éste tiene la posibilidad de llamar a esa función. Esto nos provee de un mecanismo para que el componente padre pueda inyectar lógica para responder a la llamada de esa función. En este caso estamos utilizando una función como _callback_ para que el componente hijo la llame cuando sea oportuno.

Ese es el patrón que utilizan todos los elementos que representan a elementos del DOM, y funciona con _todos_ los eventos del DOM:

```jsx
function handleMouseOver(ev) {
  console.log('Se disparó el mouseover!');
}

const el = <div onMouseOver={handleMouseOver}>Soy un texto</button>
```

La convención es llamar a las props `on<Algo>` donde ese `Algo` es el evento en cuestión.

Este patrón también se traspola a los componentes que definimos nosotros, de hecho es muy común crear "eventos de más alto nivel" a partir de estos eventos en el DOM:


```jsx
function Profile(props) {
  return (
    <div onClick={() => props.onSelect(props.id)}>
      {props.name}
      <img src={props.avatar} />
      {/* Más info del usuario */}
    </div>
  )
}
```

Aquí definimos un "evento" `onSelect` que se dispara cuando se hace click en el `div` que encierra la UI del usuario. Seleccionar un usuario tiene más significado en la app que clickear un usuario. Al manejar el concepto de selección de un usuario en nuestro componente, nos permite potencialmente modificar la forma en que se selecciona el mismo, y que no necesariamente sea a través de un click. Incluso puede que haya varias formas de seleccionar un usuario, en cuyos casos todas deberán disparar la funcion `onSelect` que recibimos por props. Es interesante señalar que estamos pasando por parámetro el `id` del usuario. Esto es totalmente válido, ya que al tener control de la función, podemos no solo elegir cuándo ejecutarla, sino con qué parámetros. No necesariamente tienen que ser los mismos parámetros de los eventos que disparan elementos de DOM.

## Eventos disponibles del DOM

Para saber con más detalle qué eventos tenemos disponibles en React, te recomiendo que [la documentación oficial que habla sobre los eventos](https://facebook.github.io/react/docs/events.html).