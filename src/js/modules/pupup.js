import { getArtwork } from './ServiceCall.js';

const modal = document.querySelector('.modal');
const body = document.querySelector('body');

const hideModal = (btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('hidden');
    body.classList.remove('no-scroll');
    modal.innerHTML = '';
  });
};

const showModal = async (artworkId) => {
  modal.classList.remove('hidden');
  body.classList.add('no-scroll');
  const result = await getArtwork(artworkId).then((result) => result);
  modal.innerHTML = `<div class="modal-dialog flex flex--column">
            <div class="modal-header">
                <button type="button" class="close-modal" aria-label="close modal" data-close>
                    ✕
                </button>
                <div class="header-content flex flex--column">
                    <div class="modal-image">
                        <img src="https://www.artic.edu/iiif/2/${result.data.image_id}/full/843,/0/default.jpg" alt="no-image provided">
                    </div>
                    <div class="modal-title">
                        <h2>${result.data.title}</h2>
                    </div>
                </div>
            </div>
            <div class="modal-content flex flex--column">
                <div class="artwork-desc flex flex--column">
                    <div class="flex">
                        <p>Artist: ${result.data.artist_title}</p>
                        <p>Place Of Origin: ${result.data.place_of_origin}</p>
                    </div>
                    <div class="flex">
                        <p>Start Date: ${result.data.date_start}</p>
                        <p>End Date: ${result.data.date_end}</p>
                    </div>
                </div>
                <div class="comments flex flex--column">
                    <h2> Comments (2)</h2>
                    <div class="comment-list flex flex--column">
                    <div class="comment">
                        <p>2022-04-22 Jane: Hello</p>
                    </div>
                    <div class="comment">
                        <p>2022-04-22 Jane: Hello</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;

  const closeBtn = modal.querySelector('.close-modal');
  hideModal(closeBtn);
};

export { showModal };
