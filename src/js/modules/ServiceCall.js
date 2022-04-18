const baseUrl = 'https://api.artic.edu/api/v1/';

const getArtWorks = async () => {
  const result = await fetch(`${baseUrl}artworks`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return result.json();
};

export default { getArtWorks };
