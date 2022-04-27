import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/Intro';
import Exhibitions from './components/exhibitions/Exhibitions';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Exhibitions />
      </main>
    </>
  );
}

export default App;
