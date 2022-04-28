import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/Intro';
import Exhibitions from './components/exhibitions/Exhibitions';
import Artists from './components/artists/Artists';
import Artworks from './components/artworks/Artworks';
import Footer from './components/footer/Footer';
import ApiCall from './api/apiCall';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiCall('exhibitions?limit=20', 'GET')
      .then((json) => {
        setData(
          json.data
            .filter((el) => el.image_id !== null && el.type !== null)
            .splice(0, 3),
        );
      })
      .catch((error) => console.log(`error::${error}`));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Intro data={data} />
        <Exhibitions data={data} />
        <Artists />
        <Artworks />
        <Footer />
      </main>
    </>
  );
}

export default App;
