const baseUrl = 'https://api.artic.edu/api/v1/';
const appID = 'Ea05s8iIppToZ9bgBQcY';
const involvmentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;

const getArtWorks = async () => {
  const result = await fetch(`${baseUrl}artworks?fields=id,image_id,title`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return result.json();
};

const addLike = async (artworkID) => {
  const bodyData = {
    item_id: artworkID,
  };
  await fetch(`${involvmentUrl}likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
};

const getLikes = async () => {
  const result = await fetch(`${involvmentUrl}likes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return result.json();
};

export { getArtWorks, addLike, getLikes };
