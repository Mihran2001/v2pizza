import React from "react";
import {
  Menu,
  MenuItems,
  Navbar,
  MenuItemHref,
  Line,
  CounterBox,
} from "./styles";
import { SButton } from "../Button";

const navItems = ["Пицца", "Комбо", "Напитки"];

const Nav = () => {
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
        <CounterBox>1</CounterBox>
      </SButton>
    </Navbar>
  );
};

export default Nav;
