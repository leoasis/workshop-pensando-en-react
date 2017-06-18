const CLIENT_ID = "042192359e1344a4ad13a6f4e739aa34";

let accessToken = localStorage.getItem("accessToken");

function redirectToAuthorize() {
  const redirectUri = process.env.NODE_ENV === "production"
    ? `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${window
        .location.href}`
    : `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${window
        .location.origin}/&state=${window.location.pathname}`;
  window.location = redirectUri;
}

if (window.location.hash) {
  const params = window.location.hash.slice(1).split("&");
  accessToken = decodeURIComponent(params[0].split("=")[1]);
  localStorage.setItem("accessToken", accessToken);

  const path = process.env.NODE_ENV === "production"
    ? window.location.pathname
    : decodeURIComponent(params[3].split("=")[1]);
  window.history.replaceState(null, document.title, path);
}

function fetchSpotify(endpoint) {
  if (!accessToken) {
    redirectToAuthorize();
    return new Promise(() => {});
  }

  return fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  }).then(res => {
    if (res.status === 401) {
      redirectToAuthorize();
      return new Promise(() => {});
    }
    return res;
  });
}

export function getArtists(query, offset = 0) {
  return fetchSpotify(`/search?q=${query}&type=artist&offset=${offset}`)
    .then(res => res.json())
    .then(response => response.artists);
}

export function getArtist(id) {
  return fetchSpotify(`/artists/${id}`)
    .then(res => res.json())
    .then(response => response);
}

export function getArtistAlbums(id) {
  return fetchSpotify(`/artists/${id}/albums`)
    .then(res => res.json())
    .then(response => response);
}
