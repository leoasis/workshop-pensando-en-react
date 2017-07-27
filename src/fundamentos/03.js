// Modificar este código convirtiendo todo a JSX:
//
// 1. Convertir las llamadas a React.createElement de SpotifyLogo a JSX.
// 2. Convertir las llamadas a React.createElement de ArtistImage a JSX.
// 3. Convertir las llamadas a React.createElement de Artist a JSX.
// 4. Convertir las llamadas a React.createElement de App a JSX.

import React from 'react';

function SpotifyLogo(props) {
  return (
    React.createElement('img', {
      src: "/spotify.svg",
      width: props.size,
      height: props.size,
      style: { verticalAlign: 'middle' }
    })
  );
}

function ArtistImage(props) {
  return (
    React.createElement('div', {
      className: 'artistImage',
      style: {
        width: props.size,
        height: props.size,
        borderRadius: props.size,
        backgroundImage: 'url("' + props.url + '")',
      }
    })
  );
}

class Artist extends React.Component {
  render() {
    return (
      React.createElement('div', { className: 'artist' },
        React.createElement(ArtistImage, {
          size: 200,
          url: this.props.artist.imageUrl
        }),
        React.createElement('span', { className: 'artistName'},
          this.props.artist.name
        ),
        React.createElement('span', null,
          this.props.artist.followers,
          ' Seguidores · ',
          this.props.artist.genres,
          ' · ',
          React.createElement('a', {
            href: this.props.artist.spotifyUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            title: 'Abrir en Spotify'
          },
            React.createElement(SpotifyLogo, {
              size: 20
            })
          )
        )
      )
    );
  }
}

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function Ejercicio3() {
  const artist = {
    name: 'The Beatles',
    followers: 3443835,
    genres: 'british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock',
    imageUrl: 'https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09',
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
  };

  return React.createElement(Artist, { artist });
}