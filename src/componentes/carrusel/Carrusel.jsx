import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slice1 from '../../assets/imagenes/slice1.jpg';
import slice2 from '../../assets/imagenes/slice2.jpg';
import slice3 from '../../assets/imagenes/slice3.jpg';
import './Carrusel.css';

const items = [
  {
    src: slice1,
    altText: 'imagen 1',
    caption: 'calidad de 30 años',
    key: 1,
  },
  {
    src: slice2,
    altText: 'imagen 2',
    caption: 'garantia asegurada',
    key: 2,
  },
  {
    src: slice3,
    altText: 'imagen 3',
    caption: 'Recibimos todos los medios de pago',
    key: 3,
  },
];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {//METETODO para cambiar a la sig imagen
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {//es para ir a un indice especifico
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="CarruFoto"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;