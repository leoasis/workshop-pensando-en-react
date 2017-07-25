import React, { Component } from "react";
import { getArtists } from "../data";

const showEmpty = false;

class App extends Component {
  render() {
    if (showEmpty) {
      return (
        <div>
          <div className="leftPanel">
            <div>
              <form className="searchForm">
                <input type="text" className="searchInput" value="" />
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
              <div className="centeredContent">
                <span className="noResults">
                  No se encontraron resultados.<br />Intenta una nueva búsqueda.
                </span>
              </div>
            </div>
          </div>
          <div className="rightFixedPanel">
            <div>
              <h2 className="myArtistsTitle">
                Mis Artistas (0)
              </h2>
              <ul className="myArtistsList" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="leftPanel">
          <div>
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
            <div className="artistsList">
              <div className="artistsListItem">
                <div className="artist isSelected">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09')"
                    }}
                  />
                  <span className="artistName">The Beatles</span>
                  <span>
                    3.443.835 Seguidores · british invasion, classic rock,
                    merseybeat, protopunk, psychedelic rock, rock ·{" "}
                    <a
                      href="https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/0f1c3346e875cba9ab5008d94ffd28248587aa9f')"
                    }}
                  />
                  <span className="artistName">Blues Beatles</span>
                  <span>
                    2.539 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/2Jt5skA2j8InQjTSNwkHig"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/701995d0fc7e399afa56bfa374203c73903701f1')"
                    }}
                  />
                  <span className="artistName">The Tape-beatles</span>
                  <span>
                    210 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/1UarLtyjvxGiRTsfFXxtnA"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/e07b85c2df502e923b579f9255239adcd2af7fcb')"
                    }}
                  />
                  <span className="artistName">The Beatles Recovered Band</span>
                  <span>
                    14.801 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/3cBV24PM5nZsXqopSHvdtS"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage: "url('null')"
                    }}
                  />
                  <span className="artistName">Made famous by Beatles</span>
                  <span>
                    15 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/4HtMP5b2L6rqtSCnZqWuPl"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/6fe2cc1054a5632d96122c3994356b2b4e8436b1')"
                    }}
                  />
                  <span className="artistName">The Beatles Tribute Band</span>
                  <span>
                    4.675 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0rhGLV687CCwGfeJYXd176"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/191647985e246afa52d12012633965635f9fe82c')"
                    }}
                  />
                  <span className="artistName">The Beatles Connection</span>
                  <span>
                    13.099 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/3ZOhDuAjCjvw9z5lEGUmgZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/8945c157bb5e720eef434320bc863938431f7b34')"
                    }}
                  />
                  <span className="artistName">Re Beatles</span>
                  <span>
                    6.738 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/2DghgxF3jV3G5xfcTpZpKr"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/519266c351755806c6b6b5bbb3c2c8eb826ec410')"
                    }}
                  />
                  <span className="artistName">The Beatles Revival Band</span>
                  <span>
                    10.582 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0zRgwHorAZPeYVdTW9F5OX"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/4d88ccbf3cb077315d03f9c5d0b636902f2aad5b')"
                    }}
                  />
                  <span className="artistName">
                    The Ultimate Beatles Cover Band
                  </span>
                  <span>
                    13.757 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/419jnuNhkJJvPAUANh7YAo"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/496314422536edff85157ef254e5555fdaabf725')"
                    }}
                  />
                  <span className="artistName">
                    The Beatles Tribute Project
                  </span>
                  <span>
                    2.684 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/7EzNTMzMN70jRxBWbxeshd"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/8e2e70fc546a58dc1d0c82415edcd5f0b2a68976')"
                    }}
                  />
                  <span className="artistName">
                    The Beatles Greatest Hits Performed By The Frank Berman Band
                  </span>
                  <span>
                    9.770 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/36QpVbYALWlz5NtMI3LhiV"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/5e6efc2f8c96d4f72ba94b62bbb66acd88929602')"
                    }}
                  />
                  <span className="artistName">
                    The Beatles Symphony Orchestra
                  </span>
                  <span>
                    1.969 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/7F4QQowQM3dIGKOCrrMJKd"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/5c0478e63d17a0e38d3360043d196c0858d6a566')"
                    }}
                  />
                  <span className="artistName">The Beatles Acoustic Trio</span>
                  <span>
                    907 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/3MqavRgbnd0NlRuNBWlo3Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/92badd58f05f53b4b3aee366eb296ff704c62813')"
                    }}
                  />
                  <span className="artistName">
                    The Beatles Revival Band &amp; Orchestra
                  </span>
                  <span>
                    2.740 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/5zgR7V2XsPpRYs1ou6xOPB"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage: "url('null')"
                    }}
                  />
                  <span className="artistName">Acoustic Beatles</span>
                  <span>
                    584 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/1M5lMx2yy0jNZwy0ebGGGt"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/9f7823367f8c8febaf240bffb4f3c7773a5a0d58')"
                    }}
                  />
                  <span className="artistName">The Beatles Covered</span>
                  <span>
                    881 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0qVGD3AptaPDfBSDntaBzb"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/ab79005b1c38e6cc8c5725fb238bd61e8c497a64')"
                    }}
                  />
                  <span className="artistName">Beatles Tribute</span>
                  <span>
                    29 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0pnmwHw5HLjZ4OFRuonTIE"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage:
                        "url('https://i.scdn.co/image/03f2b46174a8dad1b89688a5f7d99055c6399669')"
                    }}
                  />
                  <span className="artistName">Beatles Chillout</span>
                  <span>
                    9.235 Seguidores · tribute ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0waQUZ6AW3fgcOAD7BlGLn"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="artistsListItem">
                <div className="artist">
                  <div
                    className="artistImage"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200,
                      backgroundImage: "url('null')"
                    }}
                  />
                  <span className="artistName">Japanese Beatles</span>
                  <span>
                    7 Seguidores ·{" "}
                    <a
                      href="https://open.spotify.com/artist/0i9s4EHIIsdhRxaE3836zF"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir en Spotify"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 168 168"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path
                          fill="#1ED760"
                          d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="loadMoreLayout">
              <button type="button" className="loadMore">Cargar más</button>
            </div>
          </div>
        </div>
        <div className="rightFixedPanel">
          <div>
            <h2 className="myArtistsTitle">
              Mis Artistas (2)
            </h2>
            <ul className="myArtistsList">
              <li className="myArtistsListItem">
                <div className="smallArtist">
                  <div
                    className="artistImage"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundImage:
                        "url('https://i.scdn.co/image/c1a1b1ba6e7f40a1ac584481bdd6b3c2f305a35c')"
                    }}
                  />
                  <div className="smallArtistName">Foo Fighters</div>
                </div>
              </li>
              <li className="myArtistsListItem">
                <div className="smallArtist">
                  <div
                    className="artistImage"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundImage:
                        "url('https://i.scdn.co/image/197cff807611777427c93258f0a1ccdf6b013b09')"
                    }}
                  />
                  <div className="smallArtistName">The Beatles</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
