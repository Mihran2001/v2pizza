import React from "react";
import "antd/dist/antd.css";
import Container from "../../PageContainer";
import PageHeader from "../../components/Header";
import Nav from "../../components/Nav";

function Landing() {
  return (
    <Container>
      <PageHeader />
      <Nav></Nav>
    </Container>
  );
}

export default Landing;
