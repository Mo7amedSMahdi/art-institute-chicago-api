import { getArtWorks, addLike, getLikes } from './ServiceCall.js';

const container = document.querySelector('.artworks-list');
let likeButtons;

const renderArtworks = async () => {
  let artworkElements = '';
  container.innerHTML = 'fetching data...';
  const artworkArray = await getArtWorks().then((result) => result);
  const likesArray = await getLikes().then((result) => result);

  artworkArray.data.forEach((artwork) => {
    let likesCount = 0;
    const likes = likesArray.filter(
      /* eslint-disable */
      (element) => element.item_id == artwork.id
      /* eslint-enable */
    );
    if (likes.length > 0) {
      likesCount = likes[0].likes;
    }
    artworkElements += `<div data-id="${artwork.id}" class="artwork flex flex--column">
                      <div class="artwork-header">
                          <div class="header-image">
                              <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg" alt="">
                          </div>
                      </div>
                      <div class="artwork-body flex">
                          <h2>${artwork.title}</h2>
                          <div class="body-likes flex--column">
                          <button data-target="like" data-id="${artwork.id}" type="button" class="btn btn--icon ">
                          <img src="./images/heart.svg" alt="heart icon"></button>
                          <p>${likesCount}</p>
                          </div>
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
      const body = likeButton.parentElement;
      const artworkID = likeButton.dataset.id;
      const likeCounter = body.querySelector('p');
      likeCounter.innerText = parseInt(likeCounter.innerText, 10) + 1;
      await addLike(artworkID);
      const icon = likeButton.querySelector('img');
      icon.src = './images/heart-filled.svg';
    });
  });
};

export { renderArtworks };
