# 06 - Listas

Cuando queremos dibujar una lista de elementos, seguramente utilicemos un array de JavaScript. Un caso muy común es partir de cierta información y a partir de esa lista de entidades, _mapear_ esa lista a una lista de elementos de React, usando el [método `map` de `Array`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map):

```jsx
const artists = [
  { id: 1, name: 'Beatles' },
  { id: 2, name: 'Led Zeppelin' },
  { id: 3, name: 'Jamiroquai' },
  { id: 4, name: 'The Black Keys' }
];

function Artists() {
  return (
    <ul>
      {artists.map((artist) => (
        <li>{artist.name}</li>
      ))}
    </ul>
  );
}
```

>También podríamos utilizar un `array.forEach`, o un loop `for` o `while`, o lo que queramos:
> ```jsx
> function Artists() {
>   const els = [];
>   for (let i = 0; i < artists.length; i++) {
>     els.push(<li>{artists[i].name}</li>);
>   }
>
>   return <ul>{els}</ul>;
> }
> ```

Supongamos que queremos eliminar a "Led Zeppelin" de la lista de artistas, y volvemos a dibujar el componente `Artists`. Esto presenta un problema para React, ya que no puede entender qué pasó en realidad. React sólo ve esto:

```
<li>Beatles</li>          |  <li>Beatles</li>
<li>Led Zeppelin</li>     |  <li>Jamiroquai</li>
<li>Jamiroquai</li>       |  <li>The Black Keys</li>
<li>The Black Keys</li>   |
```

Pero ese estado final pudo haber sido por varias razones. Quizás cambiamos el nombre de "Led Zeppelin" por "Jamiroquai", el de "Jamiroquai" por "The Black Keys", y eliminamos el artista "The Black Keys".

Este problema lo tenemos porque React no tiene la información suficiente para identificar elementos en una lista _a través_ de distintas instancias de redibujo. Cuando no tiene esta información, React compara elemento a elemento utilizando la posición en la lista anterior y actual, si cambió la información en la misma posición, React actualiza ese elemento. Si hay menos elementos, React eliminará al final de la lista. Si hay más elementos, React agregará elementos al final de la lista. Es decir, en este caso, React asume el caso que mencionamos recién para los artistas.

React provee una forma de brindarle esa información de indentidad a cada elemento de una lista, y es con una `prop` especial que se llama `key`. Esta `prop` es especial porque no es visible desde dentro del componente al cual se le asigna. Es sólo información para React.

Podemos utilizar la `key` en el ejemplo así:

```jsx
function Artists() {
  return (
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>
  );
}
```

Utilizamos el `id` del artista ya que sabemos que es una clave única _y estable_ (es decir, que no cambia) para los artistas. El nombre podría ser también una `key` válida, siempre que no tengamos artistas con el mismo nombre. Algo como un [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) generado dentro de la iteración, sería único pero no estable, ya que cambia cada vez que se llama, por lo tanto no es una `key` aceptable,

A fines prácticos en este ejemplo, no notamos ninguna diferencia a nivel visual. La única diferencia es que React hizo más operaciones en el DOM en el primer caso sin `key`, pero más allá de la performance estaría todo bien. Sin embargo, no asignar `key` resulta un problema no sólo de performance, si los componentes tienen estado interno:

```jsx
function Artists() {
  return (
    <ul>
      {artists.map((artist) => (
        <Artist name={artist.name} />
      ))}
    </ul>
  );
}
```

En este caso, en lugar de dibujar una `li`, dibujamos el componente `Artist`. Si no asignamos la `key`, y el componente `Artist` tiene estado interno, si borramos a "Led Zeppelin" esto va a provocar que el componente que antes dibujaba a "Led Zeppelin" ahora dibuje a "Jamiroquai", pero manteniendo el estado interno del componente, es decir que si, por ejemplo, habia seleccionado a "Led Zeppelin" y luego lo elimino, en el siguiente paso vería a "Jamiroquai" seleccionado, lo cual no es correcto. Este error se corrije asignando la key correspondiente:

```jsx
function Artists() {
  return (
    <ul>
      {artists.map((artist) => (
        <Artist key={artist.id} name={artist.name} />
      ))}
    </ul>
  );
}
```

Es por estos errores sutiles, que React recomienda _SIEMPRE_ asignar una `key` cuando dibujamos listas de elementos. Usar la posición en la lista puede ser un caso válido si la lista no se va a reordenar, pero React pide que seamos explícitos y asignemos una `key` incluso en ese caso.

## Ejercicios

Ya estás listo para hacer [el ejercicio 6](http://localhost:3000/fundamentos/6).


[Siguiente >>](./07-ciclo-de-vida.md)
