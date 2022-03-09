import styled from "styled-components";

export const ChoosenPizzasBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PizzaBox = styled.div`
  display: flex;
`;

export const PizzaImgBox = styled.img`
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PizzaNameBox = styled.div``;

export const PriceBox = styled.div``;

export const CountBox = styled.div``;

export const CounterButton = styled.button`
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
