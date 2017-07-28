// Hacer que los botones de navegación funcionen correctamente actualizando el estado
// y redibujando la aplicación.
//
// 1ra parte (dentro de la función `ejercicio4A`, componente de arriba en la página)
// 1. Encerrar la llamada de `ReactDOM.render(...)` en una funcion `render`, y llamarla
//    inmediatamente después para que se dibuje el estado inicial.
// 2. Implementar la funcion `handlePrev` modificando el `state.currentIndex` y llamando
//    luego a la función `render` para redibujar la aplicación.
// 3. Hacer lo mismo con la función `handleNext`.
// 4. Verificar que el navegador es funcional, que los botones navegan entre los artistas.
//
// 2da parte (dentro de la función `ejercicio4B`, componente de abajo en la página)
// 1. Implementar el método `handlePrev` utilizando `this.setState` para actualizar
//    el `currentIndex` del estado local del componente. No mutar directamente el
//    estado.
// 2. Hacer lo mismo para el método `handleNext`.
// 3. Verificar que el navegador es funcional, que los botones navegan entre los artistas,
//    como en la primera parte.

import React from "react";
import ReactDOM from "react-dom";

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export function ejercicio4A(element) {
  const state = {
    artists,
    currentIndex: 0
  };

  function handlePrev() {
    state.currentIndex--;
    render();
  }

  function handleNext() {
    state.currentIndex++;
    render();
  }

  function render() {
    ReactDOM.render(
      <div>
        <h2>Con re-render</h2>
        <ArtistNavigator
          currentArtist={state.artists[state.currentIndex]}
          hasPrev={state.currentIndex > 0}
          hasNext={state.currentIndex < state.artists.length - 1}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>,
      element
    );
  }

  render();
}

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export function ejercicio4B() {
  return (
    <div>
      <h2>Con setState</h2>
      <StatefulArtistNavigator />
    </div>
  );
}

class StatefulArtistNavigator extends React.Component {
  constructor() {
    super();

    this.state = {
      artists,
      currentIndex: 0
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev() {
    this.setState(state => ({ currentIndex: state.currentIndex - 1 }));
  }

  handleNext() {
    this.setState(state => ({ currentIndex: state.currentIndex + 1 }));
  }

  render() {
    return (
      <ArtistNavigator
        currentArtist={this.state.artists[this.state.currentIndex]}
        hasPrev={this.state.currentIndex > 0}
        hasNext={this.state.currentIndex < this.state.artists.length - 1}
        onPrev={this.handlePrev}
        onNext={this.handleNext}
      />
    );
  }
}

const artists = [
  {
    name: "The Beatles",
    followers: 3443835,
    imageUrl:
      "https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09",
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
  },
  {
    name: "Jamiroquai",
    followers: 691384,
    imageUrl:
      "https://i.scdn.co/image/0010b128cbd114a37cde222dcd8431a28ec0f57d",
    spotifyUrl: "https://open.spotify.com/artist/6J7biCazzYhU3gM9j1wfid"
  },
  {
    name: "Pearl Jam",
    followers: 1991620,
    imageUrl:
      "https://i.scdn.co/image/40d668e897af5064f1ebd3b5e44354165f61417c",
    spotifyUrl: "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
  },
  {
    name: "Metallica",
    followers: 3692903,
    imageUrl:
      "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
    spotifyUrl: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB"
  },
  {
    name: "Aerosmith",
    followers: 2006507,
    imageUrl:
      "https://i.scdn.co/image/81442527ebb3ff17f86fde87f75f96fd80a5d97c",
    spotifyUrl: "https://open.spotify.com/artist/7Ey4PD4MYsKc5I2dolUwbH"
  },
  {
    name: "Coldplay",
    followers: 7795304,
    imageUrl:
      "https://i.scdn.co/image/02c781539fca2176059bdeafd9fa903db5b9a4d0",
    spotifyUrl: "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
  }
];

function ArtistNavigator({ currentArtist, hasPrev, hasNext, onPrev, onNext }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Artist artist={currentArtist} />
      <button disabled={!hasPrev} onClick={onPrev}>
        {"<<"}
      </button>
      <button disabled={!hasNext} onClick={onNext}>
        {">>"}
      </button>
    </div>
  );
}

function Artist({ artist }) {
  return (
    <div className="artist">
      <ArtistImage size={200} url={artist.imageUrl} />
      <span className="artistName">
        {artist.name}
      </span>
      <span>
        {artist.followers} Seguidores ·{" "}
        <a
          href={artist.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir en Spotify"
        >
          <SpotifyLogo size={20} />
        </a>
      </span>
    </div>
  );
}

function SpotifyLogo(props) {
  return (
    <img
      src="/spotify.svg"
      alt="Spotify Logo"
      width={props.size}
      height={props.size}
      style={{ verticalAlign: "middle" }}
    />
  );
}

function ArtistImage(props) {
  return (
    <div
      className="artistImage"
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size,
        backgroundImage: 'url("' + props.url + '")'
      }}
    />
  );
}
