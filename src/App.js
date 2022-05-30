import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import Nav from "./Nav";
import Contact from "./Contact";
import Registry from "./Registry";
import Directions from "./Directions";
import Rsvp from "./Rsvp";
import Info from "./Info";
import Home from "./Home";
import Footer from "./Footer";

function App() {

  const RouterContainer = styled.div`
    margin: 0;
    padding: 0;
  `
  return (
    <RouterContainer>
      <Router>
        <Nav />
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/registry" element={<Registry />}></Route>
          <Route path="/directions" element={<Directions />}></Route>
          <Route path="/rsvp" element={<Rsvp />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </RouterContainer>
  );
}

export default App;
