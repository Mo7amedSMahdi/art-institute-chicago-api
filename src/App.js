import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/Intro';
import Exhibitions from './components/exhibitions/Exhibitions';
import Artists from './components/artists/Artists';
import Artworks from './components/artworks/Artworks';
import Footer from './components/footer/Footer';
import ApiCall from './api/apiCall';
import axios from 'axios';
const baseUrl = 'https://api.artic.edu/api/v1/';

function App() {
  const [data, setData] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [artistsImages, setArtistsImages] = useState([]);

  useEffect(() => {
    const dataResponse = axios.get(baseUrl + 'exhibitions?limit=20');
    const artworksResponse = axios.get(baseUrl + 'artworks');
    const artistsResponse = axios.get(
      'https://api.artic.edu/api/v1/artists?limit=100/',
    );
    let images = [];
    axios.all([dataResponse, artworksResponse, artistsResponse]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        setData(
          responseOne.data.data
            .filter((el) => el.image_url !== null && el.type !== null)
            .splice(0, 3),
        );
        setArtworks(responseTwo.data.data);
        setArtists(
          responseThree.data.data
            .filter((a) => a.artwork_ids !== null && a.death_date !== null)
            .splice(0, 3),
        );
        responseThree.data.data
          .filter((a) => a.artwork_ids !== null && a.death_date !== null)
          .splice(0, 3)
          .map((a) => {
            const re = axios.get(
              `https://api.artic.edu/api/v1/artworks/${a.artwork_ids[0]}`,
            );
            re.then((response) => {
              images.push(response.data.data);
            });
            setArtistsImages(images);
          });
      }),
    );
  }, []);

  return (
    <>
      <Header />
      <main>
        <Intro data={data} />
        <Exhibitions data={data} />
        <Artists artists={artists} images={artistsImages} />
        <Artworks data={artworks} />
        <Footer />
      </main>
    </>
  );
}

export default App;
