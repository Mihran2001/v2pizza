import React from "react";
import { Row, Col, Carousel } from "antd";
import { CarouselItem, CarouselWrapper } from "./styles";

const carouselItems = [1, 2, 3, 4, 5, 6];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const Slider = () => {
  return;
  <Carousel {...settings}>
    {carouselItems.map((item) => (
      <CarouselItem>{item}</CarouselItem>
    ))}
  </Carousel>;
};

export default Slider;
