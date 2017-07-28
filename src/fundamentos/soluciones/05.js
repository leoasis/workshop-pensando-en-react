// Utilizar eventos para hacer interactivo el componente
// `Artist`.
//
// 1. Agregar los eventos `onMouseEnter` y `onMouseLeave` como props
//    al `div` raíz de `Artist`. Definir métodos para asignar a esas props (no te
//    olvides de hacer `.bind(this)` en el constructor!) y dentro modificar
//    el estado `hovered` correctamente.
//    Verificar que el componente se anima cuando se pasa el mouse por encima y se
//    saca.
// 2. Exponer una prop `onSelect` en `Artist` que se dispare cuando se hace click
//    en el div raíz del componente.
//    Verificar que cuando se hace click en el artista este cambia la opacidad.

import React from "react";

class Artist extends React.Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  handleSelect() {
    this.props.onSelect();
  }

  render() {
    return (
      <div
        className={`artist ${this.props.isSelected ? "isSelected" : ""}`}
        style={{
          transition: "transform 1s",
          transform: this.state.hovered ? "scale(1.2)" : ""
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleSelect}
      >
        <ArtistImage size={200} url={this.props.artist.imageUrl} />
        <span className="artistName">
          {this.props.artist.name}
        </span>
        <span>
          {this.props.artist.followers} Seguidores · {this.props.artist.genres}{" "}
          ·{" "}
          <a
            href={this.props.artist.spotifyUrl}
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
}

const artist = {
  name: "The Beatles",
  followers: 3443835,
  genres:
    "british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock",
  imageUrl: "https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09",
  spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
};

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default class Ejercicio5 extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.setState(state => ({
      isSelected: !state.isSelected
    }));
  }

  render() {
    return (
      <Artist
        artist={artist}
        isSelected={this.state.isSelected}
        onSelect={this.handleSelect}
      />
    );
  }
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
