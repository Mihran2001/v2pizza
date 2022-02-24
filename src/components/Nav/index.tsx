import React from "react";
import { Menu, MenuItems, Recycle, Navbar, MenuItemHref } from "./styles";

const Nav = () => {
  return (
    <Navbar>
      <Menu>
        <MenuItems>
          <MenuItemHref>Пицца</MenuItemHref>
        </MenuItems>
        <MenuItems>
          <MenuItemHref>Комбо</MenuItemHref>
        </MenuItems>
        <MenuItems>
          <MenuItemHref>Напитки</MenuItemHref>
        </MenuItems>
      </Menu>
      <Recycle></Recycle>
    </Navbar>
  );
};

export default Nav;
