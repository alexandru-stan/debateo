import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Carusel1 from '../../../../assets/img/hobbies.png';
import Carusel2 from '../../../../assets/img/friends.png';
import Carusel3 from '../../../../assets/img/actualidad.png';
function Carusel() {
  return (
   <div  style={{width:'30%'}} className='sm:hidden md:inline flex      max-h-sm' id="carusel">
    <Carousel id="my-carousel" controls={false} indicators={false}>
    <Carousel.Item interval={2000}>
    <div className='flex flex-col items-center justify-center'>
      <img draggable='false'
        className=" bg-moradoOscuro    carusel-tamano"
        src={Carusel1}
        alt="First slide"
      
      />
      <p className='Kanit text-naranjaMolon font-bold' style={{fontSize:'1.5rem'}}>COMPARTE TUS HOBBIES</p>
      </div>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <div className='flex flex-col items-center justify-center'>
      <img draggable='false'
        className="d-block  carusel-tamano"
        src={Carusel2}
        alt="Second slide"
      />
      <p className='Kanit text-naranjaMolon font-bold' style={{fontSize:'1.5rem'}}>CONOCE PERSONAS DE TODO EL MUNDO</p>
      </div>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <div className='flex flex-col items-center justify-center'>
      <img draggable='false'
        className="d-block  carusel-tamano"
        src={Carusel3}
        alt="Third slide"
      />
     <p className='Kanit text-naranjaMolon font-bold' style={{fontSize:'1.5rem'}}>ENTÉRATE DE LA ACTUALIDAD</p>
      </div>
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default Carusel;