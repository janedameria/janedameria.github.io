import React from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  MainContainer,
  ProjectContainer,
  Container,
  ProjectTitle,
  ProjectDesc,
  LinkIcon,
  ProjectToolsContainer,
} from "./ProjectStyles";

const Projects = () => {
  const ListOfProjects = [
    {
      title: "WorkoutLog",
      desc: "a web-application that helps you to schedule your daily workout from youtube videos.",
      tools: ["next.js", "express.js", "node.js", "mongodb"],
      link: "https://workoutlog.vercel.app/",
    },
    {
      title: "Daily Journal",
      desc: "a web-application to journal your thoughts. this project helps me to learn golang languange as well as the gin framework",
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
