import { getArtWorksCount } from './counters.js';
const nav = document.querySelector('.header-nav');

const ArtWorksCount = async () => {
  return await getArtWorksCount().then((result) => result);
};

const renderNavCounters = async () => {
  const artworksCount = await ArtWorksCount();
  const links = nav.querySelectorAll('a');

  links.forEach((link) => {
    if (link.textContent === 'Artworks') {
      const span = link.querySelector('span');
      span.textContent = `(${artworksCount})`;
    }
  });
};

const renderNav = () => {
  const htmlElement = `<ul class="nav nav--main">
                <li><a href="#">Artworks<span></span></a></li>
                <li><a href="#">Artists</a></li>
            </ul>`;
  nav.innerHTML = htmlElement;

  renderNavCounters();
};

export { renderNav };
