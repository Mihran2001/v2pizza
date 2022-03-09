import React, { useContext } from "react";
import {
  Menu,
  MenuItems,
  Navbar,
  MenuItemHref,
  Line,
  CounterBox,
} from "./styles";
import { SButton } from "../Button";
import { StateContext } from "../../store/constants";
import {useNavigate} from 'react-router-dom';

const navItems = ["Пицца", "Комбо", "Напитки"];

const Nav = () => {
  const navigate = useNavigate();
  const { totalCount } = useContext(StateContext);
  return (
    <Navbar>
      <Menu>
        {navItems.map((item) => (
          <MenuItems>
            <MenuItemHref>{item}</MenuItemHref>
          </MenuItems>
        ))}
      </Menu>
      <SButton shape="round" style={{ display: "flex" }} onClick={() => navigate('/basket')}>
        Корзина
        <Line />
        <CounterBox>{totalCount}</CounterBox>
      </SButton>
    </Navbar>
  );
};

export default Nav;
