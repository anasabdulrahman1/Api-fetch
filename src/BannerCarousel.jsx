import React from 'react';
import { Carousel } from 'react-bootstrap';
import './BannerCarousel.css';

function BannerCarousel() {
  return (
    <Carousel className="mb-5 carousel-ctr">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g1d414a9182c142ca605f0fce7bfb9d0d54f0b9cdf157bda6375f7bede52f93d5284317e6ba8d7666b2e2cee417a429d0.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          {/* <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g7739eb4b1b308b663ed8e251f4910eb56c50a155ad5ba4c103e0d76beeb74789433b5096c143335cb593aed4e48534af.jpg"
          alt="Second slide"
          
        />
        <Carousel.Caption>
          {/* <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/gb00f414094d564c2347cfb1ed6d2a43d9773bd0dd0a2dd6a386e1daab69ff13204bc75a8690f974fbc91a82d6ddde713.jpg"
          alt="Third slide"
          
        />
        <Carousel.Caption>
          {/* <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
