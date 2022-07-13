import React from "react";
import {
  Container,
  MyImage,
  ContainerColumn,
  ContainerIcon,
} from "./AboutStyles";
import icon from "../../hello_removed.png";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";

const About = () => {
  return (
    <Container className="animate__animated  animate__fadeIn">
      <MyImage src={icon} />
      <ContainerColumn justify_center>
        <h1 className="main-title">jennifer dameria</h1>
        <p className="text">
          I’m a fresh graduate from Bina Nusantara University. I have a great
          interest in software engineering and web development.
        </p>
        <ContainerIcon>
          <a
            href="https://www.linkedin.com/in/jennifer-dameria/"
            target={"_blank"}
          >
            <ImLinkedin size={"1.3em"} />
          </a>
          <a href="mailto:jenniferhutabarat@gmail.com">
            <HiOutlineMail size={"1.3em"}></HiOutlineMail>
          </a>
          <a href="https://github.com/janedameria" target={"_blank"}>
            <BsGithub size={"1.3em"} />
          </a>
        </ContainerIcon>
      </ContainerColumn>
    </Container>
  );
};

export default About;
