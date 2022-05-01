import React from 'react';

const Artists = () => {
  return (
    <section className="card-section flex flex--column" id="artists">
      <div className="section-header flex">
        <div className="header-title">
          <h2>Artists</h2>
        </div>
        <div className="link-desktop">
          <div className="header-link flex">
            <a href="#" className="section-link">
              All artists
            </a>
            <i className="ri-arrow-right-line" />
          </div>
        </div>
      </div>
      <div className="card-list grid">
        <div className="card flex flex--column">
          <div className="card-header flex flex--column">
            <img
              src="https://artic-web.imgix.net/dbf3bc42-4890-4cf7-8965-629e5326e1f0/IM041390-int_press.jpg?rect=91%2C1542%2C2126%2C1200&auto=format"
              alt=""
            />
          </div>
          <div className="card-body flex flex--column">
            <h3>Igshaan Adams: Desire Lines</h3>
            <p>
              <span>Galleries:</span> 57–9
            </p>
            <p>
              <span>Open date:</span> Dec 18, 2021–Jun 13, 2022
            </p>
          </div>
        </div>
        <div className="card flex flex--column">
          <div className="card-header flex flex--column">
            <img
              src="https://artic-web.imgix.net/cd6b38a1-cf53-4819-be64-3bd794c4fb7a/J6390_030-int.jpg?rect=0%2C250%2C3000%2C1688&auto=format"
              alt=""
            />
          </div>
          <div className="card-body flex flex--column">
            <h3>Igshaan Adams: Desire Lines</h3>
            <p>
              <span>Galleries:</span> 57–9
            </p>
            <p>
              <span>Open date:</span> Dec 18, 2021–Jun 13, 2022
            </p>
          </div>
        </div>
        <div className="card flex flex--column">
          <div className="card-header flex flex--column">
            <img
              src="https://artic-web.imgix.net/nullfc9cc2b2-5d29-45e2-b3e3-bdf084ccb91a/Mummy-Mask-IF.jpg?rect=0%2C267%2C1721%2C968&auto=format"
              alt=""
            />
          </div>
          <div className="card-body flex flex--column">
            <h3>Igshaan Adams: Desire Lines</h3>
            <p>
              <span>Galleries:</span> 57–9
            </p>
            <p>
              <span>Open date:</span> Dec 18, 2021–Jun 13, 2022
            </p>
          </div>
        </div>

        <div className="card flex flex--column">
          <div className="card-header flex flex--column">
            <img
              src="https://artic-web.imgix.net/dbf3bc42-4890-4cf7-8965-629e5326e1f0/IM041390-int_press.jpg?rect=91%2C1542%2C2126%2C1200&auto=format"
              alt=""
            />
          </div>
          <div className="card-body flex flex--column">
            <h3>Igshaan Adams: Desire Lines</h3>
            <p>
              <span>Galleries:</span> 57–9
            </p>
            <p>
              <span>Open date:</span> Dec 18, 2021–Jun 13, 2022
            </p>
          </div>
        </div>

        <div className="link-mobile">
          <div className="header-link flex">
            <a href="#" className="section-link">
              All artists
            </a>
            <i className="ri-arrow-right-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
