// ImageGallery.jsx
import React from 'react';
import ImageData from './ImageData';

const ImageGallery = () => {
  return (
    <div>
      {ImageData.map(item => (
        <img key={item.id} src={item.img} alt="" />
      ))}
    </div>
  );
};

export default ImageGallery;
