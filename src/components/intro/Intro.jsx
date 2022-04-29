import React from 'react';
import './intro.css';
import Image from '../general/Image';

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

const Intro = (props) => {
  const randomIndex = generateRandom(0, 2);
  return (
    <section id="Intro" className="intro">
      {props.data.length > 0 ? (
        // <Image
        //   cName="intro-image"
        //   id={props.data[randomIndex].image_id}
        //   alt={props.data[randomIndex].title}
        // />
        <img
          className="intro-image"
          src={props.data[randomIndex].image_url}
          alt={props.data[randomIndex].title}
        />
      ) : (
        <img src="" className="intro-image" />
      )}
      <div className="intro-content flex">
        <p>Exhibition</p>
        <div className="content-title flex flex--column">
          {props.data.length > 0 ? (
            <h1>{props.data[randomIndex].title}</h1>
          ) : (
            <h1></h1>
          )}
          {props.data.length > 0 ? (
            <p>{props.data[randomIndex].status}</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
