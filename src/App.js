import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  background: linear-gradient(180deg, #354259 2.79%, #233c69 100%);
  height: 100vh;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Noto Sans JP", sans-serif;
  }
  .main-title {
    font-size: 3.8rem;
    color: #fbfbfb;
    @media (max-width: 768px) {
      font-size: 2.6rem;
    }
  }

  ul.my-list {
    list-style-type: circle;
    color: #fbfbfb
  }

  .text {
    color: #fbfbfb;
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
      </Routes>

      <Navbar />
    </Container>
  );
}

export default App;
