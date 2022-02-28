import React, { useState } from "react";
import {
  PizzasWrapper,
  PizzaBox,
  PizzaImgBox,
  DescrBox,
  PriceBox,
} from "./styles";
import { ArticlesContent } from "../../constants/data";
import { SButton } from "../Button";
import PizzaTypeModal from "../Modal/index";

const Pizzas: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <PizzasWrapper>
      {ArticlesContent.map((item) => (
        <PizzaBox>
          <PizzaImgBox $imgSrc={item.srcSet}> </PizzaImgBox>
          <DescrBox>{item.name}</DescrBox>
          <PriceBox>
            <span> {item.smallPrice} </span>
            <PizzaTypeModal
              isVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
            <SButton onClick={() => setIsModalVisible((prev) => !prev)}>
              {" "}
              Выбрать{" "}
            </SButton>
          </PriceBox>
        </PizzaBox>
      ))}
    </PizzasWrapper>
  );
};

export default Pizzas;
