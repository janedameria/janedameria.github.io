import React from "react";
import styled from "styled-components";
import icon from "../me sketch.png";
import "animate.css";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2em;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MyImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 5%;
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Home = () => {
  return (
    <Container>
      <ContainerColumn>
        <h1 className="animate__animated animate__bounce main-title">
          hi, i'm john!
        </h1>
        <p className="text">
          welcome to my little corner on the internet! (✿◠‿◠){" "}
        </p>
      </ContainerColumn>
      <MyImage src={icon} />
    </Container>
  );
};

export default Home;
