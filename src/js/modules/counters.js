import { getArtWorks } from './ServiceCall.js';

const getArtWorksCount = async () => {
  const result = await getArtWorks().then((result) => result.pagination.total);
  return result;
};

export { getArtWorksCount };
