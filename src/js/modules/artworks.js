import { getArtWorks } from './ServiceCall.js';

const container = document.querySelector('.artworks-list');

const renderArtworks = async () => {
  let artworkElements = '';
  container.innerHTML = 'fetching data...';
  const artworkArray = await getArtWorks().then((result) => result);
  artworkArray.data.forEach((artwork) => {
    artworkElements += `<div data-id="${artwork.id}" class="artwork flex flex--column">
                      <div class="artwork-header">
                          <div class="header-image">
                              <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="${artwork.thumbnail.alt_text}">
                          </div>
                      </div>
                      <div class="artwork-body flex">
                          <h2>${artwork.title}</h2>
                          <img src="./images/heart.svg">
                      </div>
                      <div class="artwork-buttons flex flex--column">
                          <button type="button" class="btn btn--primary">Comments</button>
                          <button type="button" class="btn btn--primary">Reservation</button>
                      </div>
                  </div>`;
  });
  container.innerHTML = artworkElements;
};

export { renderArtworks };
