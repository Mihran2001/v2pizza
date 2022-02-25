import React from "react";
import styled from "styled-components";

type Props = {
  style?: React.CSSProperties;
};

const Wrapper = styled.section<{}>``;

const Section: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Section;
