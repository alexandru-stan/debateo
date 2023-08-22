import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Carusel1 from '../../../../assets/img/hobbies.png';
import Carusel2 from '../../../../assets/img/friends.png';
import Carusel3 from '../../../../assets/img/actualidad.png';
function Carusel() {
  return (
   <div className='max-w-sm max-h-sm' id="carusel">
    <Carousel id="my-carousel" controls={false} indicators={false}>
    <Carousel.Item interval={2000}>
      <img draggable='false'
        className="d-block carusel-tamano"
        src={Carusel1}
        alt="First slide"
      
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img draggable='false'
        className="d-block carusel-tamano"
        src={Carusel2}
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img draggable='false'
        className="d-block carusel-tamano"
        src={Carusel3}
        alt="Third slide"
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default Carusel;