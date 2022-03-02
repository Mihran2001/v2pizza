import React, { useContext, useState } from "react";
import {
  PizzasWrapper,
  PizzaBox,
  PizzaImgBox,
  DescrBox,
  PriceBox,
} from "./styles";
import { ArticlesContent, IArticlesContent } from "../../constants/data";
import { SButton } from "../Button";
import PizzaTypeModal from "../Modal/index";
import { DispatchContext, StateContext } from "../../store/constants";

interface IPizzaData {
  name: string;
  id: number;
  imgSrc: any;
}

const Pizzas: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pizzaDataState = useContext(StateContext);
  const pizzaDataDispatch = useContext(DispatchContext);

  const btnOnClick = (pizzaData: IArticlesContent) => {
    setIsModalVisible(true);
    pizzaDataDispatch({ type: "ADD_PIZZA_DATA", payload: { data: pizzaData } });
  };

  return (
    <PizzasWrapper>
      {ArticlesContent.map((item) => (
        <PizzaBox key={item.id}>
          <PizzaImgBox $imgSrc={item.srcSet}> </PizzaImgBox>
          <DescrBox>{item.name}</DescrBox>
          <PriceBox>
            <span> {item.smallPrice} </span>
            <SButton onClick={() => btnOnClick(item)}> Выбрать </SButton>
          </PriceBox>
        </PizzaBox>
      ))}
      <PizzaTypeModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </PizzasWrapper>
  );
};

export default Pizzas;
