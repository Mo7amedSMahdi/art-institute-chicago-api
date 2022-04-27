import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/Intro';
import Exhibitions from './components/exhibitions/Exhibitions';
import Artists from './components/artists/Artists';
import Artworks from './components/artworks/Artworks';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Exhibitions />
        <Artists />
        <Artworks />
        <Footer />
      </main>
    </>
  );
}

export default App;
