import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const NavContainer = styled.nav`
    display: flex;
    justify-content: space-evenly;
    background-color: gray;
  `;

  const NavLink = styled.div`
    color: white;
    text-decoration: none;
  `;

  return (
    <>
      <NavContainer>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Home</div>
        </Link>
        <Link to="/info" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Info</div>
        </Link>
        <Link to="/rsvp" style={{ textDecoration: 'none', color: 'white' }}>
          <div>RSVP</div>
        </Link>
        <Link to="/directions" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Directions</div>
        </Link>
        <Link to="/registry" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Registry</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Contact</div>
        </Link>
      </NavContainer>
    </>
  );
}

export default Nav;
