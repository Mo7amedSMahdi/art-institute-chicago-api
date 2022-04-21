const baseUrl = 'https://api.artic.edu/api/v1/';
const appID = 'Ea05s8iIppToZ9bgBQcY';
const involvmentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;

const getArtWorks = async () => {
  const result = await fetch(`${baseUrl}artworks`, {
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

export { getArtWorks, addLike };
