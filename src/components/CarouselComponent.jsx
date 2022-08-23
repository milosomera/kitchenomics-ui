import React from "react";
import { Carousel } from "react-bootstrap";
import beef from "../images/beef.jpg";
import chicken from "../images/chicken.jpg";
import fish from "../images/fish.jpg";
import pork from "../images/pork.jpg";
import shrimp from "../images/shrimp.jpg";

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-component mx-auto" fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded-2"
          src={beef}
          alt="Roast sirloin of beef"
        />
        <Carousel.Caption>
          <h2>Roast sirloin of beef</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded-2"
          src={chicken}
          alt="Catalan chicken"
        />
        <Carousel.Caption>
          <h2>Catalan chicken</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded-2"
          src={fish}
          alt="Fish with peas and lettuce"
        />
        <Carousel.Caption>
          <h2>Fish with peas and lettuce</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 rounded-2" src={pork} alt="Pork chops" />
        <Carousel.Caption>
          <h2>Pork chops</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded-2"
          src={shrimp}
          alt="Piri piri shrimp"
        />
        <Carousel.Caption>
          <h2>Piri piri shrimp</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
