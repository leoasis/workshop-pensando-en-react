import React, { Component } from "react";
import { getArtists } from "../data";

function SpotifyLogo({ size }) {
  return (
    <img
      src="/spotify.svg"
      alt="Spotify Logo"
      style={{ verticalAlign: "middle" }}
      height={size}
      width={size}
    />
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
