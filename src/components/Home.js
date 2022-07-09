import React from "react";
import styled from "styled-components";
import icon from "../me sketch.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 64px;
  font-family: "Noto Sans JP", sans-serif;
  color: #fbfbfb;
`;

const Text = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  color: #fbfbfb;
`;

const MyImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 5%;
`;
const Home = () => {
  return (
    <Container>
      <ContainerColumn>
        <MainTitle>hi, i'm john!</MainTitle>
        <Text>welcome to my little corner on the internet! (✿◠‿◠) </Text>
      </ContainerColumn>
      <MyImage src={icon} />
    </Container>
  );
};

export default Home;
