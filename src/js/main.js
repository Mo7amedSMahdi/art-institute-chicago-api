import '../assets/css/main.css';
import { renderNav } from './modules/nav.js';
import { renderArtworks } from './modules/artworks.js';

const renderPage = () => {
  renderNav();
  renderArtworks();
};

renderPage();
