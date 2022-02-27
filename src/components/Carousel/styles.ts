import styled from "styled-components";
import { Carousel } from "antd";

export const AntCarousel = styled(Carousel)`
  .slick-arrow::before {
    color: black;
    font-size: 30px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const CarouselItem = styled.div`
  width: 200px !important;
  height: 300px;
  border-radius: 10px;
  background-color: rgb(160, 176, 172);
`;
