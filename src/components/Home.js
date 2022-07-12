import React from "react";
import styled from "styled-components";
import icon from "../my_removed.png";
import "animate.css";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MyImage = styled.img`
  width: 200px;
  animation-duration: 10s;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
const Home = () => {
  return (
    <Container>
      <ContainerColumn>
        <h1 className="animate__animated animate__bounce  main-title">
          hi, i'm jane!
        </h1>
        <p className="text animate__animated  animate__fadeIn">
          welcome to my little corner on the internet! (✿◠‿◠){" "}
        </p>
      </ContainerColumn>
      <MyImage
        src={icon}
        className="animate__animated animate__infinite animate__swing"
      />
    </Container>
  );
};

export default Home;
