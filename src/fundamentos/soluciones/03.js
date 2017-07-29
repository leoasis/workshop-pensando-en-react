// Modificar este código convirtiendo todo a JSX:
//
// 1. Convertir las llamadas a React.createElement de SpotifyLogo a JSX.
// 2. Convertir las llamadas a React.createElement de ArtistImage a JSX.
// 3. Convertir las llamadas a React.createElement de Artist a JSX.
// 4. Convertir las llamadas a React.createElement de App a JSX.

import React from "react";

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

class Artist extends React.Component {
  render() {
    return (
      <div className="artist">
        <ArtistImage size={200} url={this.props.artist.imageUrl} />
        <span className="artistName">{this.props.artist.name}</span>
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

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function Ejercicio3() {
  const artist = {
    name: "The Beatles",
    followers: 3443835,
    genres:
      "british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock",
    imageUrl:
      "https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09",
    spotifyUrl: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"'
  };

  return <Artist artist={artist} />;
}
