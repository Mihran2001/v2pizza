import * as React from "react";
import {
  Header,
  LeftBox,
  RightBox,
  LogoLink,
  SignIn,
  LogoCoinBox,
} from "./styles";
import { ReactComponent as BrandIcon } from "../../assets/svg/logo.svg";
import { ReactComponent as CoinIcon } from "../../assets/svg/coin.svg";

const PageHeader = () => {
  return (
    <Header>
      <LeftBox>
        <LogoLink>
          <BrandIcon style={{ width: "100%" }} />
        </LogoLink>
      </LeftBox>
      <RightBox>
        <LogoCoinBox>
          <CoinIcon style={{ width: "100%" }} />
          Додокоины
        </LogoCoinBox>
        <SignIn> Воити </SignIn>
      </RightBox>
    </Header>
  );
};

export default PageHeader;
