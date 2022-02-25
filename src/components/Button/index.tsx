import * as React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "antd";

export const SButton = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
