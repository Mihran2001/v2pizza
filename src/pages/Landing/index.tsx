import React from "react";
import "antd/dist/antd.css";
import Container from "../../PageContainer";
import PageHeader from "../../components/Header";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Slider from "../../components/Carousel";
import Pizzas from "../../components/Pizzas";

function Landing() {
  return (
    <Container>
      <PageHeader />
      <Nav />
      <Section noPadding={false}>
        <Slider />
      </Section>
      <Section noPadding={false}>
        <Pizzas></Pizzas>
      </Section>
    </Container>
  );
}

export default Landing;
