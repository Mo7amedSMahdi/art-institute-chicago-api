const baseUrl = 'https://api.artic.edu/api/v1/';
const appID = 'Ea05s8iIppToZ9bgBQcY';
const involvmentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;

const ApiCall = async (url, method, body) => {
  if (method === 'GET') {
    const response = await fetch(`${baseUrl}${url}/`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response)
      .catch((error) => error);
    return response.json();
  } else {
    const response = await fetch(`${baseUrl}/${url}/`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {}),
    })
      .then((response) => response)
      .catch((error) => error);
    return response.json();
  }
};

const getArtworks = async () => {
  const artworks = await fetch(`${baseUrl}/artworks`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return artworks;
};

const getArtwork = async (artworkId) => {
  const artwork = await fetch(`${baseUrl}/artworks/${artworkId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return artwork;
};

const getExhibitions = async () => {
  const exhibitions = await fetch(`${baseUrl}/exhibitions`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return exhibitions;
};

const getExhibition = async (exhibitionId) => {
  const exhibition = await fetch(`${baseUrl}/exhibitions/${exhibitionId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return exhibition;
};

const getArtworksType = async () => {
  const artworksType = await fetch(`${baseUrl}/artwork-types`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return artworksType;
};

const getArtworkType = async (typeId) => {
  const artworkType = await fetch(`${baseUrl}/artwork-types/${typeId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response)
    .catch((error) => error);
  return artworkType;
};

export default ApiCall;
