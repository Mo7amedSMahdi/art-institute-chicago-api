import { getArtWorks, getLikes, getComments } from './ServiceCall.js';

const getArtWorksCount = async () => {
  const result = await getArtWorks().then((result) => result);
  return result.data.length;
};

const getLikesCount = async () => {
  const result = await getLikes().then((result) => result);
  return result;
};

const getNumberofComments = async (artworkId) => {
  const result = await getComments(artworkId).then((result) => result);
  if (result.error) return 0;
  return result.length;
};

export { getArtWorksCount, getLikesCount, getNumberofComments };
