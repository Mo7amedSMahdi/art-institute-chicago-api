import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/Intro';
import Exhibitions from './components/exhibitions/Exhibitions';
import Artworks from './components/artwork/Artwork';
import Artists from './components/artists/Artists';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Exhibitions />
        <Artworks />
        <Artists />
      </main>
    </>
  );
}

export default App;
