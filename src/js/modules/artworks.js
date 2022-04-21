import { getArtWorks, addLike } from './ServiceCall.js';

const container = document.querySelector('.artworks-list');
let likeButtons;
const renderArtworks = async () => {
  let artworkElements = '';
  container.innerHTML = 'fetching data...';
  const artworkArray = await getArtWorks().then((result) => result);

  artworkArray.data.forEach((artwork) => {
    artworkElements += `<div data-id="${artwork.id}" class="artwork flex flex--column">
                      <div class="artwork-header">
                          <div class="header-image">
                              <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="">
                          </div>
                      </div>
                      <div class="artwork-body flex">
                          <h2>${artwork.title}</h2>
                          <button data-target="like" data-id="${artwork.id}" type="button" class="btn btn--icon">
                          <img src="./images/heart.svg" alt="heart icon"></button>
                      </div>
                      <div class="artwork-buttons flex flex--column">
                          <button type="button" class="btn btn--primary">Comments</button>
                          <button type="button" class="btn btn--primary">Reservation</button>
                      </div>
                  </div>`;
  });
  container.innerHTML = artworkElements;
  likeButtons = document.querySelectorAll('[data-target="like"]');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', async () => {
      const artworkID = likeButton.dataset.id;
      await addLike(artworkID);
      const icon = likeButton.querySelector('img');
      icon.src = './images/heart-filled.svg';
    });
  });
};

export { renderArtworks };
