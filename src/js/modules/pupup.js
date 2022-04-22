import { getArtwork, getComments, addNewComment } from './ServiceCall.js';
import { getNumberofComments } from './counters.js';

const modal = document.querySelector('.modal');
const body = document.querySelector('body');

const hideModal = (btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('hidden');
    body.classList.remove('no-scroll');
    modal.innerHTML = '';
  });
};

const renderComment = async (artworkId) => {
  const comments = await getComments(artworkId).then((result) => result);
  const numberOfComments = await getNumberofComments(artworkId);
  const commentsContainer = modal.querySelector('.comments');
  if (numberOfComments <= 0) {
    commentsContainer.innerHTML = `<h2> Comments (0)</h2>
                    <div class="comment-list flex flex--column">
                        <p>No Comments</p>
                    </div>`;
  } else {
    commentsContainer.innerHTML = `<h2> Comments (${numberOfComments})</h2>
                    <div class="comment-list flex flex--column">
                    
                    </div>`;
    const commentList = commentsContainer.querySelector('.comment-list');
    comments.forEach((element) => {
      commentList.innerHTML += `<div class="comment">
                        <p>${element.creation_date} ${element.username}: ${element.comment}</p>
                    </div>`;
    });
  }
};

const addComment = async (artworkId) => {
  const form = document.querySelector('.add-comment-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [username, comment] = form.elements;
    if (username.value.trim() && comment.value.trim()) {
      const commentJson = {
        item_id: artworkId,
        username: username.value.trim(),
        comment: comment.value.trim(),
      };
      await addNewComment(commentJson);
      renderComment(artworkId);
      username.value = '';
      comment.value = '';
    }
  });
};

const renderModal = async (artworkId) => {
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
                    
                </div>

                <div class="add-comment flex flex--column"">
            <h2>Add a Comment</h2>
            <form class="add-comment-form flex flex--column" action="/">
                <input type="text" id="username" name="username" placeholder="Your Name" required/>
                <textarea id="comment" name="comment" placeholder="Your Insights" required></textarea>
                <button type="submit" class="btn btn--primary">Comment</button>
            </form>
        </div>

            </div>
        </div>`;
  renderComment(artworkId);
  addComment(artworkId);
  const closeBtn = modal.querySelector('.close-modal');
  hideModal(closeBtn);
};

export { renderModal };
