# 05 - Agregar interacciones

> Este paso requiere que hayas completado los siguientes fundamentos, además de los del paso anterior:
1. [Eventos](../fundamentos/05-eventos.md)
2. [Ciclo de vida de los componentes](../fundamentos/07-ciclo-de-vida.md)
3. [Refs](../fundamentos/08-refs.md)
4. [Elementos de formulario](../fundamentos/09-elementos-de-formulario.md)
5. [Outro](../fundamentos/10-outro.md)

Hasta ahora con React, todo fue dividir en componentes y enviar datos hacia abajo en en árbol de componentes. Una idea muy simple que nos permitió crear el 80% de nuestra aplicación.

Ahora llegó el momento de agregar las interacciones, y en este caso vamos a tener que revertir el flujo de datos. Con las interacciones, los datos viajan desde los componentes de más abajo (donde se originan las interacciones o eventos), hacia arriba, donde están los componentes con estado, y en respuesta a esa interacción se actualiza el estado.

Esto con React lo hacemos con pasando funciones como `props` a los componentes de más abajo, de forma que cuando ocurre un evento, esos componentes llaman a esa función pasada como prop, causando que la lógica de esa función se ejecute. Esa lógica, generalmente resulta en una llamada a `this.setState` de los componentes con estado.

Veamos algunos casos en nuestra aplicación.

> En este momento, como vamos a comenzar a agregar interacción a nuestra aplicación, tiene sentido dejar de usar la llamada a `getArtists` que veníamos usando, que devuelve siempre un valor fijo, y usar la verdadera API de Spotify. Para esto, modifica la línea:
> ```js
> import { getArtists } from "../data";
> ```
> por esta:
> ```js
> import { getArtists } from "../api";
> ```
> Esta función ahora en lugar de devolver una lista, devolverá una Promise que devuelve un objeto respuesta, con los campos `items` (el listado de artistas) y el campo `total` (el total de artistas).
> También, esa función recibe dos parametros, el texto a buscar, y el offset de resultados a traer. Este último es util para manejar la paginación.

Vamos a comenzar con una búsqueda de formulario. Primero vamos a agregar interacción de forma que podamos modificar el texto a medida que el usuario tipea. Hacemos esto utilizando la prop `onChange` del elemento `input`:

```jsx
class SearchInput extends Component {
  constructor() {
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <form className="searchForm">
        <input
          type="text"
          autoFocus
          className="searchInput"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <SearchButton type="submit" className="searchButtonLayout" />
      </form>
    );
  }
}
```

Luego modificamos el componente `ArtistsPanel` para que actualice el estado de `searchText` cada vez que se dispara el `onChange`:

```jsx
class ArtistsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      searchText: "",
      total: 0,
      artists: []
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({ searchText });
  }

  render() {
    const { searchText, artists, total, fetching } = this.state;

    return (
      <div>
        <SearchInput text={searchText} onChange={this.handleSearchTextChange} />
        {/* ... */}
      </div>
    );
  }
}
```

Con este cambio, podemos ver que ahora podemos tipear en el cuadro de texto, y el texto se actualiza. No solo eso, sino que el estado se actualiza también en el componente `ArtistsPanel`, permitiéndonos disparar una consulta a la API de Spotify para buscar artistas.

Sin embargo, no queremos disparar una consulta cada vez que el usuario tipea, sino cuando el usuario envía el formulario, es decir, cuando clickea el botón de buscar. Podríamos tener otra función como prop llamada `onSubmit` para que se dispare cuando el botón de búsqueda se envía, pero podemos hacer algo mejor. Un detalle a observar, es que al componente `ArtistsPanel` no le interesa conocer _todos_ los valores intermedios de `searchText` antes de que se ejecute la búsqueda, por lo que sería útil mover esos estados intermedios al componente de `SearchInput`, donde sí se necesita. Si hicieramos esto, podríamos utilizar la prop `onChange` como el evento en el que el formulario "cambia" y se ejecuta una nueva búsqueda. Ya que `onChange` es un evento que nosotros definimos, podemos darle la semántica que nosotros queramos. En nuestro caso, es evento que nos interesa es el cambio del formulario cada vez que se hace click en buscar. Los demás cambios intermedios, son detalle de implementación del componente `SearchInput`.

Vamos a ver como quedarían los cambios en `SearchInput`, ya que `ArtistsPanel` va a quedar igual que antes:

```jsx
class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.setState({ text: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.onChange(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          autoFocus
          className="searchInput"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <SearchButton type="submit" className="searchButtonLayout" />
      </form>
    );
  }
}
```

Lo que hacemos en este caso es hacer que el estado intermedio del campo de texto lo maneje directamente `SearchInput` con su estado local. En el constructor inicializamos el estado con el valor que tenga el texto que nos llega por props. Y luego manejamos ese estado cada vez que cambia en el `onChange` del `input`, actualizándolo con `setState` cada vez que se dispara el `handleInputChange`. Finalmente, cuando el usuario envía el formulario, recien ahí disparamos el `this.props.onChange` con el valor actual del estado.

Ahora, lo que queremos es ejecutar la búsqueda cada vez que se ejecute el `onChange` de `SearchInput`. Para esto, tenemos que llamar a la función `getArtists` con los parámetros correctos. También debemos recordar setear el estado de "cargando" mientras estamos llamando a la API, y actualizar el estado cuando llega la respuesta.

Con todo esto, agregamos lo siguiente en `ArtistsPanel`:

```jsx
class ArtistsPanel extends Component {
  // ...

  handleSearchTextChange(searchText) {
    this.setState({ searchText });

    if (searchText.length === 0) return;

    this.setState({ fetching: true });

    getArtists(searchText, 0).then(data => {
      this.setState({
        fetching: false,
        artists: data.items,
        total: data.total
      })
    });
  }

  render() {
    const { searchText, artists, total, fetching } = this.state;

    return (
      <div>
        <SearchInput text={searchText} onChange={this.handleSearchTextChange} />
        {/* ... */}
      </div>
    );
  }
}
```

Y listo! Ahora con esos cambios deberíamos poder realizar búsquedas cambiando el texto del formulario y clickeando en buscar. Deberíamos poder ver la pantalla de cargando y cuando la respuesta llega, ver el listado nuevo de artistas.

Sigamos. Cuando vimos el texto de cargando, aún no vimos los puntitos animándose, ya que todavía no agregamos las interacciones aquí. En este caso, la interacción no es un evento que genera el usuario, sino que es el paso del tiempo. Para esto vamos a tener que iniciar un intervalo con `setInterval`, que vaya aumentando la cantidad de puntos en forma cíclica. Para esto tenemos que utilizar los eventos del ciclo de vida del componente, para comenzar y terminar el intervalo. Supongamos que tenemos el componente `Loading` que es el que se encarga de mostrar el texto "Cargando...". Así es como vamos a animar el contador:

```jsx
class Loading extends Component {
  constructor() {
    super();

    this.state = { dots: "." };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        dots: this.state.dots.length === 3 ? "" : this.state.dots + "."
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">
        Cargando{this.state.dots}
      </div>
    );
  }
}
```

En `componentDidMount` iniciamos el intervalo, guardamos la referencia del mismo para luego llamar a `clearInterval` en el `componentWillUnmount`, que es cuando se va a desmontar el componente.

Dentro del intervalo simplemente actualizamos el estado en forma acorde, es decir, agregando un punto más, a menos que ya tengamos 3 puntos en cuyo caso volvemos a comenzar.

Eso es todo lo que necesitamos para tener el componente animado de "Cargando...".

Veamos un caso más, como seleccionar un artista. En este caso dijimos que el estado de artistas seleccionados vive en el componente `App`, ya que los dos paneles utilizan ese estado. Sin embargo, la interacción ocurre en el componente `Artist` ya que cuando clickeamos el artista es cuando lo vamos a seleccionar (o deseleccionar, si ya estaba seleccionado). Por eso, vamos al componente `Artist` y le agregamos una prop de tipo función para exponer un evento para ser usado:

```jsx
function Artist({ artist, selected, onSelect }) {
  return (
    <div
      onClick={() => {
        onSelect(artist);
      }}
      className={`artist ${selected ? "isSelected" : null}`}
    >
      {/* ... */}

    </div>
  );
}
```

Llamamos a la prop `onSelect` cuando hacemos click en el `div` que encierra el contenido de `Artist`. Le pasamos por parámetro el objeto que representa el artista, para ser usado por el que quiera escuchar este evento. Seguimos propagando esta prop hacia arriba hasta llegar a `App`. Primero con `ArtistsList`:

```jsx
function ArtistsList({ artists, selectedArtists, onSelectArtist }) {
  return (
    <div className="artistsList">

      {artists.map(artist =>
        <div key={artist.id} className="artistsListItem">
          <Artist
            artist={artist}
            selected={selectedArtists.some(a => a.id === artist.id)}
            onSelect={onSelectArtist}
          />
        </div>
      )}

    </div>
  );
}
```

Luego con `ArtistsPanel`:

```jsx
class ArtistsPanel extends Component {
  // ...

  render() {
    const { searchText, artists, total, fetching } = this.state;

    return (
      <div>
        {/* ... */}
        <ArtistsList
          artists={artists}
          selectedArtists={this.props.selectedArtists}
          onSelectArtist={this.props.onSelectArtist}
        />
        {/* ... */}
      </div>
    );
  }
}
```

Y finalmente llegamos a `App`, donde ejecutamos la lógica necesaria para actualizar la lista de artistas seleccionados:


```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArtists: []
    };
    this.handleSelectArtist = this.handleSelectArtist.bind(this);
  }

  handleSelectArtist(artist) {
    const without = this.state.selectedArtists.filter(a => a.id !== artist.id);
    if (without.length !== this.state.selectedArtists.length) {
      this.setState({
        selectedArtists: without
      });
    } else {
      this.setState({
        selectedArtists: this.state.selectedArtists.concat(artist)
      });
    }
  }

  render() {
    return (
      <div>
        <div className="leftPanel">
          <ArtistsPanel
            selectedArtists={this.state.selectedArtists}
            onSelectArtist={this.handleSelectArtist}
          />
        </div>
        <div className="rightFixedPanel">
          <CollectionPanel
            artists={this.state.selectedArtists}
          />
        </div>
      </div>
    );
  }
}
```

En el método `handleSelectArtist`, que se dispara cuando se selecciona o se deselecciona un artista, ejecutamos la lógica para quitar el artista de la lista si ya estaba, o agregarlo si no estaba. Usamos `setState` como siempre para actualizar el estado y que React redibuje el componente.

Ahora es tu turno para seguir con las interacciones. Las que están faltando son la de paginación con el boton de "cargar más", y la de clickear los artistas en el panel de la derecha, que debería deseleccionar a los artistas y quitarlos de esa lista.

Una vez que hayas completado este paso, ya terminaste! [Un último paso](./06-outro.md) para ver que fue todo lo que vimos.