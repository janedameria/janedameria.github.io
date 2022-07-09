import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const Container = styled.div`
  background: linear-gradient(180deg, #354259 2.79%, #233c69 100%);
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <Container>
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
