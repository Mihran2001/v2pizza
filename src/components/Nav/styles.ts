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
`;

export const MenuItems = styled.li`
  margin-left: 20px;
`;

export const MenuItemHref = styled.a`
  color: black;
`;

export const Recycle = styled(Button)``;
