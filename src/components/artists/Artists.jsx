import React, { useState, useEffect } from 'react';
import Image from '../general/Image';
import axios from 'axios';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: props.images, artists: props.artists };
  }
  componentDidMount() {
    this.setState(this.images);
  }
  render() {
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
          {this.state.artists.map((el, index) => (
            <div key={el.id} className="card flex flex--column">
              <div className="card-header flex flex--column">
                {this.state.images ? (
                  <Image
                    key={this.images[index].id}
                    id={this.images[index].image_id}
                    alt={this.images[index].title}
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
  }
}

// const Artists = (props) => {
//   return (
//     <section className="card-section flex flex--column" id="exhibitions">
//       <div className="section-header flex">
//         <div className="header-title">
//           <h2>Artists</h2>
//         </div>
//         <div className="header-link flex">
//           <a href="#" className="section-link">
//             All Artists
//           </a>
//           <i className="ri-arrow-right-line" />
//         </div>
//       </div>
//       <div className="card-list grid">
//         {props.artists.map((el, index) => (
//           <div key={el.id} className="card flex flex--column">
//             <div className="card-header flex flex--column">
//               {props.images.length > 0 ? (
//                 <Image
//                   key={props.images.images[index].id}
//                   id={props.images.images[index].image_id}
//                   alt={props.images.images[index].title}
//                 />
//               ) : null}
//             </div>
//             <div className="card-body flex flex--column">
//               <h3>{el.title}</h3>
//               <p>
//                 <span>Birth Date:</span> {el.birth_date}
//               </p>
//               <p>
//                 <span>Death Date:</span> {el.death_date}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="header-link hidden flex">
//         <a href="#" className="section-link">
//           All Artists
//         </a>
//         <i className="ri-arrow-right-line" />
//       </div>
//     </section>
//   );
// };

export default Artists;
