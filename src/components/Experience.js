import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  color: #c2ded1;

  > span {
    color: #ece5c7;
  }
`;

const Text = styled.p`
  color: #fbfbfb;
`;

const Experience = () => {
  const ListExperience = [
    {
      title: "Fullstack Developer Intern ",
      company: "@ PT Bank AIUEO",
      date: "February 2021 - February 2022",
      description: [
        "Maintain and improve projects using MERN stack (MongoDB, Express.js,React and Node.js)",
        "Analyze and implement requirements into features",
        "Wrote unit tests to verify the functionality of user interfaces and back-end processing to ensure high code coverage and standards",
        "Participated in code reviews to improve code quality",
      ],
    },
  ];

  const renderExperience = () => {
    return ListExperience.map((value) => (
      <Grid>
        <Row>
          <Col md={6} xs={12}>
            <Row end="md">
              <Title>
                {value.title}
                <span>{value.company}</span>
              </Title>
            </Row>
            <Row end="md">
              <Text>{value.date}</Text>
            </Row>
          </Col>
          <Col md={6} xs={12}>
            <ul className="my-list">
              {value.description.map((value) => (
                <li>
                  <Text>{value}</Text>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Grid>
    ));
  };

  return (
    <Container>
      {renderExperience()}
      <Navbar />
    </Container>
  );
};

export default Experience;
