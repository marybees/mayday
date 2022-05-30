import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/directions">Directions</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default Nav;
