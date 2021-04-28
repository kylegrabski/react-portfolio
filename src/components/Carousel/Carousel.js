import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselProjects(props) {
  return (
    <>
      <Carousel fade
      pause={false}
      >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/workout-tracker.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/budget-tracker.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/spoofify.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselProjects;
