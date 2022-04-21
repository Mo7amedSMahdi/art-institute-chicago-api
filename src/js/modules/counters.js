import { getArtWorks, getLikes } from './ServiceCall.js';

const getArtWorksCount = async () => {
  const result = await getArtWorks().then((result) => result.pagination.total);
  return result;
};

const getLikesCount = async (artworkId) => {
  let result = await getLikes().then((result) => result);
  result = result.filter((like) => like.item_id === artworkId);
  return result.length;
};

export { getArtWorksCount, getLikesCount };
