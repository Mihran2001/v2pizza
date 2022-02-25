import styled from "styled-components";
import { Button } from "antd";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const MenuItemHref = styled.a`
  color: black;
`;

export const Line = styled.div`
  height: 24px;
  width: 1px;
  margin: 0px 12px;
  background: rgb(255, 255, 255);
  opacity: 0.4;
`;

export const CounterBox = styled.div``;
