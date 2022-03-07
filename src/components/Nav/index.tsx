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

const navItems = ["Пицца", "Комбо", "Напитки"];

const Nav = () => {
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
      <SButton shape="round" style={{ display: "flex" }}>
        Корзина
        <Line />
        <CounterBox>{totalCount}</CounterBox>
      </SButton>
    </Navbar>
  );
};

export default Nav;
