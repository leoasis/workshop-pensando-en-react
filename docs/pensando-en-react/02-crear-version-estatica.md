# 02 - Crear Versión Estática

> Este paso requiere que hayas completado los siguientes fundamentos:
> 1. [Render y Create Element](../fundamentos/01-render-y-create-element.md)
> 2. [Componentes](../fundamentos/02-componentes.md)
> 3. [JSX](../fundamentos/03-jsx.md)
> 6. [Listas](../fundamentos/06-listas.md)

Una vez que ya tenemos la división en componentes, podemos pasar a crear una implementación estática de nuestra aplicación. La idea es convertir el HTML que representa un estado estático de nuestra aplicación, en un árbol de componentes de React que se dibujan en base a `props`.

En esta etapa, vas a estar tipeando mucho, moviendo código y no tanto pensando, ya que es más bien mecánico el proceso. Una vez que descubras el mecanismo en los primeros 2 o 3 casos, los demás salen de igual forma y más rápido.

En el repo vas a encontrar el archivo `/src/inicio/index.js`. Este es el código que vas a estar modificando al hacer la aplicación.

En este archivo tenemos un gran componente `App` que encierra toda la UI de nuestra aplicación, escrita en JSX. Podemos ver también que hay un flag `showEmpty` para poder cambiar entre la versión estática del listado de artistas y el estado de "no se encontraron resultados". También hay una función disponible importada que se llama `getArtists` que permite obtener la misma información que se ve en el browser en forma de array, como si viniera de la API. Esto será util para dividir la aplicación en componentes e ir parametrizando el contenido en base al valor de un objeto de ese array.

Vamos a realizar algunos ejemplos, y luego deberás completar el resto por tu cuenta.


En primer lugar, como en el paso anterior dividimos en dos paneles la primera vez, vamos a hacer esa división en el código.

Creamos dos componentes, `ArtistsPanel` y `CollectionPanel`, donde el primero es el panel de la izquierda y el otro el de la derecha. Identificamos los `div`s con `className="leftPanel"` y con `className="rightFixedPanel"`, y esos los dejamos en `App` como los "placeholders" de los paneles. Todo el contenido interno de cada uno de esos divs, lo movemos a los componentes:

```jsx
function ArtistsPanel() {
  return (
    <div>
      <form className="searchForm">
        {/* ... */}
      </form>
      <div className="artistsList">
        {/* ... */}
      </div>
      {/* ... */}
    </div>
  )
}

function CollectionsPanel() {
  return (
    <div>
      <h2 className="myArtistsTitle">
        Mis Artistas (2)
      </h2>
      <ul className="myArtistsList">
        {/* ... */}
      </ul>
      {/* ... */}
    </div>
  )
}
```

Y ahora modificamos el componente `App` para que use a esos componentes que creamos:

```jsx
class App extends Component {
  if (showEmpty) {
    // ...esta parte la ignoramos por ahora.
  }

  return (
    <div>
      <div className="leftPanel">
        <ArtistsPanel />
      </div>
      <div className="rightFixedPanel">
        <CollectionsPanel />
      </div>
    </div>
  )
}
```

Ya nuestro componente `App` dejo de ser ese componente gigante que teníamos al principio, lo dividimos en dos componentes.

Ahora seguimos dividiendo como lo hicimos en el paso 1, nos enfocamos en el `ArtistsPanel`, y vamos a dividir en otros dos componentes, el formulario de búsqueda, y el listado de artistas. En este caso, como vamos a utilizar la información de los artistas, es útil empezar a parametrizar los componentes y obtener el listado de artistas con `getArtists` y pasar el listado al componente como `props`. Luego parametrizaremos los items:


```jsx
function SearchInput() {
  return (
    <form className="searchForm">
      <input type="text" className="searchInput" value="beatles" />
      <button type="submit" className="searchButtonLayout searchButton">
        <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
          <title>Buscar</title>
          <path
            d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  )
}

function ArtistsList(props) {
  const artists = props.artists; // Por ahora los dejamos aquí, luego parametrizaremos.
  return (
    <div className="artistsList">
        <div className="artistsListItem">
          {/* ... */}
        </div>
        <div className="artistsListItem">
          {/* ... */}
        </div>
        {/* ... */}
    </div>
  )
}
```

Reemplazamos el contenido en `ArtistsPanel`, obteniendo los artistas con `getArtists` y pasandoselos a `ArtistsList` como `prop`:

```jsx
function ArtistsPanel() {
  const artists = getArtists();

  return (
    <div>
      <SearchInput />
      <ArtistsList artists={artists} />
    </div>

  )
}
```

Seguimos partiendo en componentes, y nos enfocamos en el componente `ArtistsList`. Ya recibimos la prop `artists`, en anticipación a que este componente dibujará todos los artistas de la lista. También identificamos en el JSX de `ArtistsList` que se repite el fragmento de UI que representa a un artista, con distintos valores para cada artista. Podemos parametrizar esto moviendo esa estructura a su propio componente, `Artist`, y le pasamos cada uno de los artistas de la lista como prop.

```jsx
function Artist(props) {
  return (
    <div className="artist">
      <div
        className="artistImage"
        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
          backgroundImage:
            `url('${props.artist.images[0].url}')`
        }}
      />
      <span className="artistName">{props.artist.name}</span>
      {/* ... */}
    </div>
  )
}

function ArtistsList(props) {
  return (
    <div className="artistsList">
      {props.artists.map((artist) => (
        <div className="artistsListItem">
          <Artist artist={artist} />
        </div>
      ))}
    </div>
  )
}
```

Podemos ver como vamos reduciendo el código final y vamos reusando estructuras con componentes.

Si te aparece un error en la consola del navegador indicando que te falta agregar la `key` en un componente, probablemente necesites asignarlo en este paso, donde iteramos por la lista de artistas y creamos elementos `div` para cada uno. Esos `div` necesitan una `key`, [como vimos en los fundamentos](../fundamentos/06-listas.md).

También no olvides guardar una lista de artistas seleccionados, de forma que puedas asignar la clase `isSelected` al `div` de `className="artist"` dependiendo si el artista está seleccionado o no. Por ahora no tenemos el mecanismo de seleccionar artistas, pero podemos recibir una `prop` en el componente `Artist` que indique si el artista esta seleccionado o no, y en base a eso poner o no esa clase. Luego en `ArtistsPanel`, donde obtuvimos la lista de artistas a partir de `getArtists`, podemos crear una lista de artistas seleccionados y propagarla por los componentes via `props` hasta el componente `Artist`:


```jsx
function ArtistsPanel() {
  const artists = getArtists();
  // Seleccionamos algunos artistas
  const selectedArtists = [artists[0], artists[2]];
  return (
    <div>
      <SearchInput />
      <ArtistsList
        artists={artists}
        selectedArtists={selectedArtists}
      />
    </div>

  )
}
function ArtistsList(props) {
  return (
    <div className="artistsList">
      {props.artists.map((artist) => (
        <div className="artistsListItem">
          <Artist
            artist={artist}
            selected={props.selectedArtists.some(a => a.id === artist.id)}
          />
        </div>
      ))}
    </div>
  )
}

function Artist(props) {
  return (
    <div
      className={`artist ${props.selected ? 'isSelected' : ''}`}
    >
      {/* ... */}
    </div>
  )
}
```

Bueno, hasta aquí con los ejemplos, ahora es tu turno de seguir! Recordá también componentizar el caso de "no hay resultados".

Cuando termines, [vamos a identificar el estado de nuestra aplicación](./03-identificar-estado-minimo.md).