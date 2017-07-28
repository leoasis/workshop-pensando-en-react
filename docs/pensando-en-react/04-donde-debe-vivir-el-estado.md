# 04 - Dónde debe vivir el estado

> Este paso requiere que hayas completado los siguientes fundamentos, además de los del paso anterior:
> 1. [Manejo de Estado (setState y re-render)](../fundamentos/04-set-state-y-re-render.md)

Muy bien, ahora que identificamos el estado de nuestra aplicación, es momento de decidir dónde debe vivir ese estado. Nos referimos en este caso a qué componentes son los que deben ser dueños de ese estado, es decir, en qué componentes vamos a tener esa información como estado local, con `this.state`.

La clave de todo esto es entender que en React modelamos el flujo de nuestros datos en forma unidireccional. Es decir, los datos viajan _hacia abajo_ en el árbol de componentes. Ya lo vimos con las `props` en los pasos anteriores: nuestra aplicación consiste en ir creando componentes e ir pasando la información como parámetro a esos componentes, cada vez mas granular y específica para los componentes que se encuentran más adentro en el árbol.

Con el estado local, pasa lo mismo. Desde el momento que definimos un dueño del estado, es decir, el que inicializa su `this.state` con los valores correspondientes, a partir de allí hacia abajo, esa información comenzará a viajar como `props` para los otros componentes, a medida que la necesitan.

Entendido esto, podemos armar una serie de pasos para identificar cuáles son los componentes con estado local, y qué estado es el que debemos poner allí:

1. Dado cierto valor del estado, identificamos cuáles son los componentes que dibujan UI basándose en ese estado.
2. Buscamos el componente más próximo que tenga a todos los componentes que usan el estado como descendientes, es decir, que sea dibujados por el componente mismo o por los hijos del componente.
3. Si el componente padre de ese componente _también_ usa el estado, entonces subimos un nivel más, sino, este componente es el dueño del estado.

Ahora, vamos a ver como aplicarían estos pasos con nuestra aplicación.

* El listado de artistas actual.
* El texto por el cual estamos buscando artistas.
* Un booleano indicando si estamos esperando una respuesta de la API o no.
* El total de artistas para una consulta.
* El listado de artistas seleccionados.
* Los puntos que estamos mostrando en el componente de "cargando" mientras se anima.

Comenzamos por el listado de artistas. Este estado está siendo utilizado por `ArtistsList`. Sin embargo, `ArtistsPanel` necesita enviarselo por prop ya que el listado va a cambiar dependiendo del valor del texto ingresado en el formulario. Lo mismo con el total de artistas. El flag para indicar si estamos buscando nuevos artistas es usado en `ArtistsPanel`, para decidir si mostrar el listado o si mostrar el texo de cargando, y modificar el texto de cargar más o cargando. El texto de búsqueda lo utiliza el componente `SearchInput`, pero también lo necesita el componente `ArtistsPanel` para efectuar la búsqueda y modificar el listado de artistas y los demás valores relacionados. El listado de artistas seleccionados son necesarios tanto para el listado artistas de la búsqueda, como por el listado de artistas del panel de la derecha. Entonces, el componente común a ellos dos tendrá que ser el dueño de ese estado, en este caso el componente `App`. Finalmente, los puntos del componente que muestra el texto "cargando" solo son utilizados allí, y no son necesarios para ningún otro valor, por lo que ese componente es el dueño de ese estado.

Entonces, aplicando esto, modificamos el componente `ArtistsPanel` (lo cambiamos de componente tipo función a tipo clase, ya que ahora tendrá estado):

```jsx
class ArtistsPanel extends React.Component {
  constructor() {
    this.state = {
      artists: [],
      total: 0,
      fetching: false,
      searchText: ''
    };
  }

  render() {
    //...
  }
}
```

Y hacemos lo mismo con los otros componentes donde debe vivir el resto del estado.

Una vez que tenemos esto, ya podemos ir modificando el estado inicial de cada uno de los componentes con estado, e ir viendo distintas versiones estáticas de nuestra aplicación, como si fueran distintas fotos de nuestra aplicación ya interactiva. Podes probar combinaciones como `fetching: true` y `searchText: "Beatles"`, o `fetching: false` y `artists: []`, o `artists: getArtists()` y `total: 1000`. Lo mismo para los otros componentes con estado.

Una vez que hayas hecho esto y veas que las combinaciones dibujan estados correctos de nuestra UI, estamos listos para el paso final, [agregar las interacciones](./05-agregar-interacciones.md)