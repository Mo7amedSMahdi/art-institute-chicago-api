import { getArtWorks, getLikes } from './ServiceCall.js';

const getArtWorksCount = async () => {
  const result = await getArtWorks().then((result) => result.pagination.total);
  return result;
};

const getLikesCount = async (artworkId) => {
  let result = await getLikes().then((result) => result);
  result = result.filter((like) => like.item_id === '38774');
  console.log(result);
  // result.forEach((like) => {
  //   console.log(like);
  // });
};

export { getArtWorksCount, getLikesCount };
