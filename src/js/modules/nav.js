import { getArtWorksCount } from './counters.js';

const nav = document.querySelector('.header-nav');
const ArtWorksCount = async () => {
  return await getArtWorksCount().then((result) => result);
};

const renderNav = () => {
  const htmlElement = `<ul class="nav nav--main">
                <li><a href="#">Artworks<span></a></li>
                <li><a href="#">Artists</a></li>
            </ul>`;
  nav.innerHTML = htmlElement;
};

export { renderNav };
