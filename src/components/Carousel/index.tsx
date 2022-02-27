import React from "react";
import { Row, Col, Carousel } from "antd";
import { CarouselItem, CarouselWrapper, AntCarousel } from "./styles";

const carouselItems = [1, 2, 3, 4, 5, 6];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
};

const Slider = () => {
  return (
    <AntCarousel {...settings}>
      {carouselItems.map((item) => (
        <CarouselItem>{item}</CarouselItem>
      ))}
    </AntCarousel>
  );
};

export default Slider;
