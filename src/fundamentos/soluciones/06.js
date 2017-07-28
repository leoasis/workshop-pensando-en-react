// Vamos a ver por qué son importantes las keys con este ejemplo. En cada paso
// que tengas que observar qué pasa, te recomiendo mirar el DOM con las dev tools
// de Chrome y ver cómo se modifica el mismo cuando se reordena o borran elementos.
// Intentá explicar con tus palabras qué es lo que está pasando y por qué.
//
// 1. Arreglar el warning que React nos muestra en la consola, diciendo que falta
//    agregar una `key` en los elementos del array. Usar `index` (índice del array)
//    como la `key`.
// 2. Hacer click en algunos artistas para seleccionarlos, y reordenar con el botón.
//    Observar qué pasa. Eliminar el primer elemento y observar qué pasa.
// 3. Utilizar esta vez `Math.random()` como `key`, y repetir el paso 2.
// 4. Utilizar esta vez el id del artista `artists.id` como `key`. Repetir el paso 2.

import React from "react";

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default class Ejercicio6 extends React.Component {
  constructor() {
    super();

    this.state = {
      artists: [
        {
          id: 1,
          name: "The Beatles",
          imageUrl:
            "https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09"
        },
        {
          id: 2,
          name: "Jamiroquai",
          imageUrl:
            "https://i.scdn.co/image/0010b128cbd114a37cde222dcd8431a28ec0f57d"
        },
        {
          id: 3,
          name: "Pearl Jam",
          imageUrl:
            "https://i.scdn.co/image/40d668e897af5064f1ebd3b5e44354165f61417c"
        },
        {
          id: 4,
          name: "Metallica",
          imageUrl:
            "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29"
        },
        {
          id: 5,
          name: "Aerosmith",
          imageUrl:
            "https://i.scdn.co/image/81442527ebb3ff17f86fde87f75f96fd80a5d97c"
        },
        {
          id: 6,
          name: "Coldplay",
          imageUrl:
            "https://i.scdn.co/image/02c781539fca2176059bdeafd9fa903db5b9a4d0"
        }
      ]
    };

    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleDeleteFirst = this.handleDeleteFirst.bind(this);
  }

  handleShuffle() {
    this.setState(state => {
      return { artists: shuffle(state.artists) };
    });
  }

  handleDeleteFirst() {
    this.setState(state => ({
      artists: state.artists.slice(1)
    }));
  }

  render() {
    const { artists } = this.state;

    return (
      <div>
        <button onClick={this.handleShuffle}>Reordenar</button>
        <button onClick={this.handleDeleteFirst}>Borrar 1er elemento</button>
        <ul className="myArtistsList">
          {/* Agregar la `key` aquí */}
          {artists.map((artist, index) =>
            <li key={artist.id} className="myArtistsListItem">
              <Artist artist={artist} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class Artist extends React.Component {
  constructor() {
    super();
    this.state = { selected: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ selected: ev.target.checked });
  }

  render() {
    const { artist } = this.props;

    return (
      <label className="smallArtist">
        <ArtistImage size={50} url={artist.imageUrl} />
        <div className="smallArtistName">
          {artist.name}
        </div>
        <input
          type="checkbox"
          checked={this.state.selected}
          onChange={this.handleChange}
          style={{ marginLeft: 10 }}
        />
      </label>
    );
  }
}

function ArtistImage({ size, url }) {
  return (
    <div
      className="artistImage"
      style={{
        width: size,
        height: size,
        borderRadius: size,
        backgroundImage: `url('${url}')`
      }}
    />
  );
}

function shuffle(array) {
  array = [...array];

  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
