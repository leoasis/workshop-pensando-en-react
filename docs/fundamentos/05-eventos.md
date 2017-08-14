# 05 - Eventos

Ya sabemos enviar datos desde afuera de nuestra aplicación hacia adentro, usando `props` a través de nuestros componentes. Ahora, cómo nos comunicamos a la inversa? Cómo hacemos para informarle a un componente padre que pasó algo en un componente hijo?

En el fundamento anterior, ya adelantamos algo en el ejemplo de `MiComponente`, donde hicimos algo del estilo:

```jsx
<button onClick={() => {
  this.setState((prevState) => ({
    contador: prevState.contador + 1
  }))
}}>Incrementar</button>
```

Quizás no te llamo tanto la atención, pero lo que hicimos es interesante. Te acordás cuando dijimos que una prop podía ser de cualquier tipo, no sólo strings? Bueno, una prop puede ser una función! Cuando pasamos como parámetro una función a un componente, éste tiene la posibilidad de llamar a esa función. Esto nos provee de un mecanismo para que el componente padre pueda inyectar lógica para responder a la llamada de esa función. En este caso estamos utilizando una función como _callback_ para que el componente hijo la llame cuando sea oportuno.

Ese es el patrón que utilizan todos los elementos que representan a elementos del DOM para sus eventos, y funciona con _todos_ los eventos del DOM:

```jsx
function handleMouseOver(ev) {
  console.log('Se disparó el mouseover!');
}

const el = <div onMouseOver={handleMouseOver}>Soy un texto</div>
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

// y lo usaríamos así:

function handleSelect(profileId) {
  console.log('Seleccionaron al usuario de id', profileId);
}

<Profile id={1} name="Juan Perez" avatar="..." onSelect={handleSelect}>
```

Aquí definimos un "evento" `onSelect` que se dispara cuando se hace click en el `div` que encierra la UI del usuario. Seleccionar un usuario tiene más significado en la app que clickear un usuario. Al manejar el concepto de selección de un usuario en nuestro componente, nos permite potencialmente modificar la forma en que se selecciona el mismo, y que no necesariamente sea a través de un click. Incluso puede que haya varias formas de seleccionar un usuario, en cuyos casos todas deberán disparar la funcion `onSelect` que recibimos por props. Es interesante señalar que estamos pasando por parámetro el `id` del usuario. Esto es totalmente válido, ya que al tener control de la función, podemos no solo elegir cuándo ejecutarla, sino con qué parámetros. No necesariamente tienen que ser los mismos parámetros de los eventos que disparan elementos de DOM.

## Eventos disponibles del DOM

Para saber con más detalle qué eventos tenemos disponibles en React, te recomiendo que [la documentación oficial que habla sobre los eventos](https://facebook.github.io/react/docs/events.html).

## Evitando crear funciones en el render

Veamos este ejemplo:

```jsx
class Counter {
  constructor() {
    super();

    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState(state => ({ counter: state.counter + 1 }))}>
          Increment
        </button>
        {this.state.counter}
      </div>
    );
  }

}
```

Si observamos con atención, vemos que cada vez que este componente se dibuje, vamos a estar creando una _nueva_ función que asignamos a la prop `onClick` del `button`. Esta creación de funciones innecesaria es un problema de performance. No se nota demasiado en aplicaciones pequeñas, e incluso tampoco en aplicaciones grandes si no se redibujan con mucha frecuencia. Aún así, es muy simple de evitar, y conviene hacerlo cuando se pueda. Al menos, es interesante saber cómo hacerlo para cuando empecemos a analizar por qué nuestra aplicación no tiene la performance deseada y descubramos que éste es el problema.

> Crear nuevas funciones y pasarlas por props cada vez que redibujamos un componente, tiene otra consecuencia. Existe un método para evitar que un componente se vuelva a dibujar cuando sabemos que sus props no cambiaron, como una mejora de performance. Esto se verá más en detalle cuando se vean los eventos del ciclo de vida en el [fundamento 7](./07-ciclo-de-vida.md). El problema de crear funciones nuevas cada vez, es que hace que este método no nos sirva, ya que si estamos pasando nuevas funciones cada vez por props, las props siempre cambiarán y no vamos a poder evitar que se redibuje el componente, cuando en realidad la función hace lo mismo que antes, solo que creamos una nueva función que hace lo mismo.

Lo que deberíamos hacer es evitar crear una función cada vez que dibujamos el componente. Para esto, necesitamos guardar esta función dentro de la clase y utilizarla en el `render`. Para esto utilizamos el constructor, que es cuando se construye la instancia del componente:

```jsx
class Counter {
  constructor() {
    super();

    this.state = { counter: 0 };

    this.handleClick = () => this.setState(state => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Increment
        </button>
        {this.state.counter}
      </div>
    );
  }

}
```

Sin embargo, si guardamos todas las funciones en el constructor, éste puede tornarse muy largo y difícil de leer. Es por esto que más comunmente se utilizan los métodos de la clase. Igualmente en el constructor debemos asociar el `this` del método con la instancia explícitamente:

```jsx
class Counter {
  constructor() {
    super();

    this.state = { counter: 0 };

    // Pisamos la referencia de `handleClick` con el
    // método `handleClick` explícitamente asociado a
    // `this`, que aquí en el constructor se refiere
    // a la instancia del componente.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Como hicimos `.bind(this)` allí arriba 👆,
    // Este `this` será la instancia del componente.
    // Si no hacemos el bind de arriba, este `this`
    // dependerá de cómo se llame esta función cuando la pasemos
    // por `props` al `button` debajo 👇, pero NO será
    // la instancia de este componente, que es lo que
    // queremos.
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Increment
        </button>
        {this.state.counter}
      </div>
    );
  }

}
```

Quizás todo esto explicado en esta sección te pueda resultar un poco complejo, pero básicamente es entender [cómo funciona el `this` en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this). Si aún no entendés por completo, no te preocupes! La mejor forma de aprender esto es toparte con el problema, identificarlo y solucionarlo. Espero que al menos esto te sirva para poder identificar el problema más rápido!

## Ejercicios

Ya estás listo para hacer [el ejercicio 5](http://localhost:3000/fundamentos/5).


[Siguiente >>](./06-listas.md)