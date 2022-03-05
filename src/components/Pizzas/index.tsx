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

const Pizzas: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData]: any = useState({});

  const btnOnClick = (pizzaData: IArticlesContent) => {
    setIsModalVisible(true);
    setModalData(pizzaData);
    // modalPizzaDataDispatch({
    //   type: "ADD_PIZZA_MODAL",
    //   payload: { data: pizzaData },
    // });
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
        modalData={modalData}
      />
    </PizzasWrapper>
  );
};

export default Pizzas;
