import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <section id="Intro" className="intro">
      <img
        src="https://artic-web.imgix.net/cd6b38a1-cf53-4819-be64-3bd794c4fb7a/J6390_030-int.jpg?rect=0%2C250%2C3000%2C1688&auto=format"
        alt="image header"
        className="intro-image"
      />
      <div className="intro-content flex">
        <p>Exhibition</p>
        <div className="content-title flex flex--column">
          <h1>Igshaan Adams: Desire Lines</h1>
          <p>Apr 2–Aug 1, 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
