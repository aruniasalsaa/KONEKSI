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
    <Container className='beranda-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='slide-style'>
        {images.map((image, index) => (
          <Carousel.Item key={image.id || index}>
            <SlideImage image={image.src} text={image.text} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default BerandaEvents;