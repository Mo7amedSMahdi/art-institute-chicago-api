import React, { useState, useEffect } from 'react';
import Image from '../general/Image';
import _ from 'lodash';
import axios from 'axios';

const Artists = (props) => {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    let images = [];
    if (props.artists) {
      props.artists.map((art) => {
        axios
          .get(`https://api.artic.edu/api/v1/artworks/${art.artwork_ids[0]}`)
          .then((response) => {
            return images.push(response.data.data);
          });
        setArtworks(images);
      });
    }
  }, [props.artists]);
  return (
    <section className="card-section flex flex--column" id="exhibitions">
      <div className="section-header flex">
        <div className="header-title">
          <h2>Artists</h2>
        </div>
        <div className="header-link flex">
          <a href="#" className="section-link">
            All Artists
          </a>
          <i className="ri-arrow-right-line" />
        </div>
      </div>
      <div className="card-list grid">
        {props.artists.map((el, index) => (
          <div key={el.id} className="card flex flex--column">
            <div className="card-header flex flex--column">
              {!_.isEmpty(artworks.artworks) ? (
                <Image
                  key={artworks[index].id}
                  id={artworks[index].image_id}
                  alt={artworks[index].title}
                />
              ) : null}
            </div>
            <div className="card-body flex flex--column">
              <h3>{el.title}</h3>
              <p>
                <span>Birth Date:</span> {el.birth_date}
              </p>
              <p>
                <span>Death Date:</span> {el.death_date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="header-link hidden flex">
        <a href="#" className="section-link">
          All Artists
        </a>
        <i className="ri-arrow-right-line" />
      </div>
    </section>
  );
};

export default Artists;
