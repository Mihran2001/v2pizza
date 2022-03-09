import React, { useContext } from "react";
import { PageContainer } from "../../PageContainer/styles";
import Section from "../Section";
import {
  ChoosenPizzasBox,
  PizzaBox,
  PizzaImgBox,
  PizzaNameBox,
  PriceBox,
  CountBox,
  CounterButton,
} from "./styles";
import { DispatchContext, StateContext } from "../../store/constants";
import { SButton } from "../Button";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg";

const ChoosenPizzas = () => {
  const { choosenPizzas } = useContext(StateContext);

  console.log(choosenPizzas);

  return (
    <PageContainer>
      <ChoosenPizzasBox>
        {choosenPizzas.map((item: any) => {
          return (
            <PizzaBox>
              <PizzaImgBox src="https://dodopizza-a.akamaihd.net/static/Img/Products/4bf37f95fcd341d780ab1ae93f64e3f4_366x366.jpeg" />
              <PizzaNameBox>
                <span>{item.name}</span>
              </PizzaNameBox>
              <PriceBox>
                <span>{item.smallPrice}</span>
              </PriceBox>
              <CountBox>
                <CounterButton>
                  <MinusIcon />
                </CounterButton>
                {item.count}
                <CounterButton>
                  <PlusIcon />
                </CounterButton>
              </CountBox>
            </PizzaBox>
          );
        })}
        {/* <PizzaBox>
          <PizzaImgBox src="https://dodopizza-a.akamaihd.net/static/Img/Products/4bf37f95fcd341d780ab1ae93f64e3f4_366x366.jpeg" />
          <PizzaNameBox>
            <span>some pizza</span>
          </PizzaNameBox>
          <PriceBox>
            <span>395</span>
          </PriceBox>
          <CountBox>
            <CounterButton>
              <MinusIcon />
            </CounterButton>
                1
            <CounterButton>
              <PlusIcon />
            </CounterButton>
          </CountBox>
        </PizzaBox> */}
      </ChoosenPizzasBox>
    </PageContainer>
  );
};

export default ChoosenPizzas;
