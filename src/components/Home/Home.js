import React from "react";
import { Container, ContainerColumn, MyImage } from "./HomeStyles";
import icon from "../../my_removed.png";
import "animate.css";

const Home = () => {
  return (
    <Container>
      <ContainerColumn>
        <h1 className="animate__animated animate__bounce main-title">
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
