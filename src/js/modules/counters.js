import { getArtWorks, getLikes } from './ServiceCall.js';

const getArtWorksCount = async () => {
  const result = await getArtWorks().then((result) => result.pagination.total);
  return result;
};

const getLikesCount = async () => {
  let result = await getLikes().then((result) => result);
  return result.length;
};

export { getArtWorksCount, getLikesCount };
