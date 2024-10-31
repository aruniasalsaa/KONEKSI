import React from 'react';
import { Image } from 'react-bootstrap';

function SlideImage({ image }) {
  return (
    <div className="carousel-image-container">
      <Image src={image} fluid className='p-4'/>
    </div>
  );
}
export default SlideImage;
