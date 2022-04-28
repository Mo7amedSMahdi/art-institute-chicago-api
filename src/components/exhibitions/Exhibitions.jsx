import React from 'react';
import './exhibitions.css';
import Image from '../general/Image';

const Exhibitions = (props) => {
  return (
    <section className="card-section flex flex--column" id="exhibitions">
      <div className="section-header flex">
        <div className="header-title">
          <h2>Exhibitions</h2>
        </div>
        <div className="header-link flex">
          <a href="#" className="section-link">
            All exhibitions
          </a>
          <i className="ri-arrow-right-line" />
        </div>
      </div>
      <div className="card-list grid">
        {props.data.map((el) => (
          <div key={el.id} className="card flex flex--column">
            <div className="card-header flex flex--column">
              <Image id={el.image_id} alt={el.title} />
            </div>
            <div className="card-body flex flex--column">
              <h3>{el.title}</h3>
              <p>
                <span>Type:</span> {el.type}
              </p>
              <p>
                <span>Status:</span> {el.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="header-link hidden flex">
        <a href="#" className="section-link">
          All exhibitions
        </a>
        <i className="ri-arrow-right-line" />
      </div>
    </section>
  );
};

export default Exhibitions;
