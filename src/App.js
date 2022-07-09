import styled from "styled-components";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const Container = styled.div`
  background: linear-gradient(180deg, #354259 2.79%, #233c69 100%);
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <Container>
      <Home />
      <Navbar />
    </Container>
  );
}

export default App;
