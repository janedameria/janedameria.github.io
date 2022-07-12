import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  background-color: #dafded;
  width: 300px;
  height: 184px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;
  margin: 0 10px;
  &::before {
    content: "";
    background: #dafded;
    position: absolute;
    top: -15px;
    width: 130px;
    height: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const ProjectTitle = styled.h3`
  color: #354259;
`;

const ProjectDesc = styled.p`
  color: #697996;
  font-size: 0.75em;
  text-align: justify;
  text-justify: inter-word;
`;
const ProjectToolsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.75em;
  font-weight: bold;

  > * {
    background-color: #354259;
    color: #fbfbfb;
    padding: 0.2em 0.3em;
    border-radius: 3px;
  }
`;

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;
const LinkIcon = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1em;
  color: #354259;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Projects = () => {
  const ListOfProjects = [
    {
      title: "Daily Workout",
      desc:
        "a web-application that helps you to schedule your daily workout from youtube videos.",
      tools: ["next.js", "express.js", "node.js", "mongodb"],
      link: "https://workoutlog.vercel.app/",
    },
    {
      title: "Daily Journal",
      desc:
        "a web-application to journal your thoughts. this project helps me to learn golang languange as well as the gin framework",
      tools: ["next.js", "go", "gin", "mongodb"],
      link: "https://daily-journal-ten.vercel.app/",
    },
  ];

  return (
    <MainContainer className="animate__animated  animate__fadeIn">
      {ListOfProjects.map((value) => (
        <ProjectContainer>
          <Container>
            <ProjectTitle>{value.title}</ProjectTitle>
            <LinkIcon>
              <a href={value.link} target="_blank">
                <FiExternalLink />
              </a>
            </LinkIcon>
            <ProjectDesc>{value.desc}</ProjectDesc>
            <ProjectToolsContainer>
              {value.tools.map((tool) => (
                <p>{tool}</p>
              ))}
            </ProjectToolsContainer>
          </Container>
        </ProjectContainer>
      ))}
    </MainContainer>
  );
};

export default Projects;
