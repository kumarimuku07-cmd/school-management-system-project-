import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  return (
    <div className="main-slider">
      <Carousel>
        <Carousel.Item>
          <div className="slider-image slide1">
            <div className="carousel-caption">
              <h2>Quality Education for All</h2>
              <p>Empowering students with knowledge and skills for a brighter future</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-image slide2">
            <div className="carousel-caption">
              <h2>Expert Faculty Members</h2>
              <p>Learn from experienced educators dedicated to student success</p>
              <button className="btn btn-primary">Our Teachers</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-image slide3">
            <div className="carousel-caption">
              <h2>Modern Learning Facilities</h2>
              <p>State-of-the-art classrooms and laboratories for hands-on learning</p>
              <button className="btn btn-primary">Explore Facilities</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;