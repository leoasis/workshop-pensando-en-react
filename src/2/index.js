import React, { Component } from "react";
import { getArtists } from "../data";

function SpotifyLogo({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      version="1.1"
      viewBox="0 0 168 168"
      style={{ verticalAlign: "middle" }}
    >
      <path
        fill="#1ED760"
        d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
      />
    </svg>
  );
}

function ArtistImage({ size, artist }) {
  const image = artist.images
    .sort((a, b) => a.width - b.width)
    .find(i => i.width >= size);
  const imageUrl = image ? `url('${image.url}')` : null;

  return (
    <div
      className="artistImage"
      style={{
        width: size,
        height: size,
        borderRadius: size,
        backgroundImage: imageUrl
      }}
    />
  );
}

const formatter = new Intl.NumberFormat("es-AR");

function Artist({ artist, selected }) {
  return (
    <div className={`artist ${selected ? "isSelected" : null}`}>
      <ArtistImage size={200} artist={artist} />
      <span className="artistName">
        {artist.name}
      </span>

      <span>
        {formatter.format(artist.followers.total)} Seguidores
        {artist.genres.length > 0 && " · " + artist.genres.join(", ")}
        {" · "}
        <a
          href={artist.external_urls.spotify}
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

function CenteredContent({ children }) {
  return (
    <div className="centeredContent">
      {children}
    </div>
  );
}

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        Cargando...
      </div>
    );
  }
}

function LoadMore({ loading, onClick }) {
  return (
    <button
      type="button"
      className="loadMore"
      onClick={loading ? null : onClick}
    >
      {loading ? "Cargando..." : "Cargar más"}
    </button>
  );
}

function SearchButton(props) {
  return (
    <button {...props} className={`${props.className} searchButton`}>
      <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
        <title>Buscar</title>
        <path
          d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

class SearchInput extends Component {
  render() {
    return (
      <form className="searchForm">
        <input type="text" autoFocus className="searchInput" value="beatles" />
        <SearchButton type="submit" className="searchButtonLayout" />
      </form>
    );
  }
}

function NoResults() {
  return (
    <span className="noResults">
      No se encontraron resultados.<br />Intenta una nueva búsqueda.
    </span>
  );
}

function ArtistsList({ artists, selectedArtists }) {
  return (
    <div className="artistsList">

      {artists.map(artist =>
        <div key={artist.id} className="artistsListItem">
          <Artist
            artist={artist}
            selected={selectedArtists.some(a => a.id === artist.id)}
          />
        </div>
      )}

    </div>
  );
}

class ArtistsPanel extends Component {
  render() {
    const searchText = "";
    const artists = getArtists();
    const total = artists.length;
    const fetching = false;
    const selectedArtists = [];

    return (
      <div>
        <SearchInput text={searchText} />
        {artists.length > 0
          ? <ArtistsList artists={artists} selectedArtists={selectedArtists} />
          : <CenteredContent>
              {fetching ? <Loading /> : <NoResults />}
            </CenteredContent>}
        {total > artists.length
          ? <div className="loadMoreLayout">
              <LoadMore loading={fetching} />
            </div>
          : null}
      </div>
    );
  }
}

function CollectionItem({ artist }) {
  return (
    <div className="smallArtist">
      <ArtistImage size={50} artist={artist} />
      <div className="smallArtistName">{artist.name}</div>
    </div>
  );
}

class CollectionPanel extends Component {
  render() {
    const artists = [];

    return (
      <div>
        <h2 className="myArtistsTitle">
          Mis Artistas ({artists.length})
        </h2>

        <ul className="myArtistsList">
          {artists.map(artist =>
            <li key={artist.id} className="myArtistsListItem">
              <CollectionItem artist={artist} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="leftPanel">
          <ArtistsPanel />
        </div>
        <div className="rightFixedPanel">
          <CollectionPanel />
        </div>
      </div>
    );
  }
}

export default App;
