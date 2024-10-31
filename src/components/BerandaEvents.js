import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideImage from './SlideImages';
import { Container } from 'react-bootstrap';

function BerandaEvents({ images }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className='display-component'>
      <h1 className='beranda-title'>
        Events
      </h1>
      <Carousel activeIndex={index} onSelect={handleSelect} > 
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <SlideImage image={image.src} text={image.text} />
            <Carousel.Caption>
              <h3>{image.label}</h3>
              <p>{image.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default BerandaEvents;