import "./App.css";
import Home from "./Home";
import Work from "./Work";
import Navbar from "./Navbar";
import Contact from "./Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </>
  );
}

export default App;
