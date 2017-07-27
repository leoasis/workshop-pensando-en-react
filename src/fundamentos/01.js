// Modificar el siguiente código para que en lugar de escribir contenido del elemento
// con `innerHTML`, lo haga con ReactDOM.render.
//
// Para esto tenes que:
//
// 1. Abrir el archivo src/fundamentos/01.js desde tu editor de texto
// 2. Convertir el HTML dentro del string a llamadas a React.createElement.
//    Recordá que podes usar variables para guardar los elementos de React a medida
//    que los vas convirtiendo.
// 3. Utilizar el resultado en `ReactDOM.render` junto con el `element` pasado como
//    parámetro.

import React from 'react';
import ReactDOM from 'react-dom';

// La siguiente línea de código fue agregada para poder correr este ejercicio dentro del proyecto general.
export default function ex1(element) {
  element.innerHTML = `
    <div class="artist">
      <div class="artistImage" style="width: 200px; height: 200px; border-radius: 200px; background-image: url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09');">
      </div>
      <span class="artistName">
        The Beatles
      </span>
      <span>
        3.443.835 Seguidores · british invasion, classic rock, merseybeat, protopunk, psychedelic rock, rock ·
        <a href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2" target="_blank" rel="noopener noreferrer" title="Abrir en Spotify">
          <img src="/spotify.svg" width="20" height="20" style="vertical-align: middle;" />
        </a>
      </span>
    </div>`;

  // ReactDOM.render(???, element);
}