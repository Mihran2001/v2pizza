import React from "react";
import styled, { css } from "styled-components";

type Props = {
  style?: React.CSSProperties;
  noPadding: boolean;
};

const Wrapper = styled.section<{ $noPadding?: boolean }>`
  position: relative;
  padding-top: 80px;
  ${({ $noPadding }) => $noPadding && css({ paddingTop: "0 !important" })}
`;

const Section: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Section;
