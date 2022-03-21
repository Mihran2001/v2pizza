import React, { useCallback, useContext, useMemo, useState } from "react";
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
import { mapFromArray } from "../../helpers/dataMap";
import { ArticlesContent } from "../../constants/data";

const ChoosenPizzas = () => {
  const { choosenPizzas } = useContext(StateContext);
  const dataMap = useMemo(() => mapFromArray(ArticlesContent), []);
  const dispatch = useContext(DispatchContext);

  const addCountDispatch = (id: number) => {
    dispatch({ type: "ADD_CHOOSEN_COUNT", payload: { id } });
  };

  const reduceCountDispatch = (id: number) => {
    dispatch({ type: "REDUCE_COUNT", payload: { id } });
  };

  console.log(choosenPizzas, "choosenPizzasss");

  return (
    <PageContainer>
      <ChoosenPizzasBox>
        {choosenPizzas.map((item: any) => {
          const itemId = item.id;
          return (
            <PizzaBox>
              {/* <PizzaImgBox src={[dataMap[`${itemId}`].srcSet]} /> */}
              <PizzaImgBox
                src={
                  "https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg"
                }
              />
              <PizzaNameBox>
                <span>{dataMap[`${itemId}`].name}</span>
              </PizzaNameBox>
              <PriceBox>
                <span>{dataMap[`${itemId}`].smallPrice}</span>
              </PriceBox>
              <CountBox>
                <CounterButton onClick={() => reduceCountDispatch(item.id)}>
                  <MinusIcon />
                </CounterButton>
                {/* {dataMap[`${itemId}`].count} */}
                {item.count}
                <CounterButton onClick={() => addCountDispatch(item.id)}>
                  <PlusIcon />
                </CounterButton>
              </CountBox>
            </PizzaBox>
          );
        })}
        <button>Оформить заказ</button>
      </ChoosenPizzasBox>
    </PageContainer>
  );
};

export default ChoosenPizzas;
