import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";

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

const ContainerIcon = styled.div`
  color: #fbfbfb;
`;

const About = () => {
  return (
    <Container>
      <ContainerColumn>
        <h1 className="main-title">John Doe</h1>
        <p className="text">
          I’m a fresh graduate from University. I have a great interest in
          software engineering and web development.
        </p>
        <ContainerIcon>
          <BsGithub />
          <HiOutlineMail />
          <ImLinkedin />
        </ContainerIcon>
      </ContainerColumn>
    </Container>
  );
};

export default About;
