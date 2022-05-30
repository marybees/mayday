import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {

  const NavTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #494848;  `

  const NavSubtitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #494848;
  `

  const NavContainer = styled.nav`
    display: flex;
    justify-content: space-evenly;
    color: #494848;
  `;

  return (
    <>
      <NavTitle>May Day</NavTitle>
      <NavSubtitle>Join us for Mary & Will's Baby Bash</NavSubtitle>
      <NavContainer>
        <Link to="/" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>Home</div>
        </Link>
        <Link to="/info" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>Info</div>
        </Link>
        <Link to="/rsvp" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>RSVP</div>
        </Link>
        <Link to="/directions" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>Directions</div>
        </Link>
        <Link to="/registry" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>Registry</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#494848' }}>
          <div>Contact</div>
        </Link>
      </NavContainer>
    </>
  );
}

export default Nav;
