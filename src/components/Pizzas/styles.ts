import styled, { css } from "styled-components";
import { Image } from "antd";

export const PizzasWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PizzaBox = styled.div`
  width: 362px;
  margin-left: 50px;
  margin-bottom: 50px;
  /* height: 300px; */
`;

export const PizzaImgBox = styled.div<{ $imgSrc: string }>`
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-image: ${({ $imgSrc }) => `url("${$imgSrc}")`};
`;

export const DescrBox = styled.div`
  width: 100%;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const Wrapper = styled.section<{ $noPadding?: boolean }>`
//   position: relative;
//   padding-top: 80px;
//   ${({ $noPadding }) => $noPadding && css({ paddingTop: "0 !important" })}
// `;
