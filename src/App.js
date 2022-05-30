import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./Contact";
import Registry from "./Registry";
import Directions from "./Directions";
import Rsvp from "./Rsvp";
import Info from "./Info";
import Home from "./Home";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/registry" element={<Registry />}></Route>
          <Route path="/directions" element={<Directions />}></Route>
          <Route path="/rsvp" element={<Rsvp />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
