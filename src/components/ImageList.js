import React from 'react';

import './ImageList.css';
import CardImage from './CardImage';

const ImageList = (props) => {
  let images = props.images.map((image) => (
    <CardImage {...image} key={image.id} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
