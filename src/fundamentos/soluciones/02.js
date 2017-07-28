// Modificar este código definiendo 3 componentes:
//
// 1. El componente `Artist` que encierra todo el div de clase "artist". Recibe
//    una prop `artist` que es el objeto definido dentro de `App`.
// 2. El componente `ArtistImage` que engloba el div con clase "artistImage". Recibe
//    como props el tamaño de la imagen (un número definido dentro de `App`) y la
//    url de la imagen del artista.
// 3. El componente `SpotifyLogo` que encierra el elemento imagen con el logo de
//    Spotify. Recibe como prop el tamaño del logo (un número definido dentro de
//    `App`).
//
// Al menos uno de los componentes debe ser de tipo clase y al menos uno debe ser
// de tipo función.

import React from "react";

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function Ejercicio2() {
  const artist = {
    name: "The Beatles",
    followers: 3443835,
    genres:
      "british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock",
    imageUrl:
      "https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09",
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
  };

  return React.createElement(Artist, { artist });
}

class Artist extends React.Component {
  render() {
    const { artist } = this.props;

    const logoSize = 20;
    const imageSize = 200;

    return React.createElement(
      "div",
      { className: "artist" },
      React.createElement(ArtistImage, {
        size: imageSize,
        url: artist.imageUrl
      }),
      React.createElement("span", { className: "artistName" }, artist.name),
      React.createElement(
        "span",
        null,
        artist.followers,
        " Seguidores · ",
        artist.genres,
        " · ",
        React.createElement(
          "a",
          {
            href: artist.spotifyUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Abrir en Spotify"
          },
          React.createElement(SpotifyLogo, {
            size: logoSize
          })
        )
      )
    );
  }
}

function ArtistImage({ size, url }) {
  return React.createElement("div", {
    className: "artistImage",
    style: {
      width: size,
      height: size,
      borderRadius: size,
      backgroundImage: 'url("' + url + '")'
    }
  });
}

function SpotifyLogo({ size }) {
  return React.createElement("img", {
    src: "/spotify.svg",
    width: size,
    height: size,
    style: { verticalAlign: "middle" }
  });
}
