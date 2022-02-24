import styled from "styled-components";
import { Button } from "antd";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0px 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const LeftBox = styled.div``;

export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignIn = styled(Button)`
  border-radius: 10px;
`;

export const LogoCoinBox = styled.span`
  text-align: center;
  padding: 0px 20px;
`;

export const LogoLink = styled.a``;
