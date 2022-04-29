import React from 'react';
import Image from '../general/Image';

const Artworks = (props) => {
  return (
    <section className="card-section flex flex--column" id="artworks">
      <div className="section-header flex">
        <div className="header-title">
          <h2>Artworks</h2>
        </div>
        <div className="header-link flex">
          <a href="#" className="section-link">
            All Artworks
          </a>
          <i className="ri-arrow-right-line" />
        </div>
      </div>
      <div className="card-list grid">
        {props.data
          ? props.data.map((prop) => {
              return (
                <div key={prop.id} className="card flex flex--column">
                  <div className="card-header flex flex--column">
                    <Image id={prop.image_id} alt={prop.title} />
                    <h3>{prop.title}</h3>
                  </div>
                  <div className="card-body">
                    <p>
                      <span>By:</span> {prop.artist_title}
                    </p>
                    <p>
                      {prop.place_of_origin !== null ? (
                        <>
                          <span>Place of origin:</span> {prop.place_of_origin}
                        </>
                      ) : (
                        <>
                          <span>Place of origin:</span> unknown
                        </>
                      )}
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <div className="header-link hidden flex">
        <a href="#" className="section-link">
          All Artworks
        </a>
        <i className="ri-arrow-right-line" />
      </div>
    </section>
  );
};

export default Artworks;
