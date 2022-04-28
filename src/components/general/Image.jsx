import React from 'react';

const Image = (props) => {
  const url = `https://www.artic.edu/iiif/2/${props.id}/full/843,/0/default.jpg`;
  return <img className={props.cName} src={url} alt={props.alt} />;
};

export default Image;
