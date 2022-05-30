import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {

  const NavTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #494848;
    font-family: 'Sacramento', cursive;
    font-size: 150px;
    line-height: 100px;
    text-align: center;
    font-weight: 100;
  `

  const NavSubtitle = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #494848;
    margin-top: -50px;
  `

  const NavContainer = styled.nav`
    padding: 32px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-evenly;
    color: #494848;
    flex-wrap: wrap;
  `;

  const LinkText = styled.div`
    padding: 4px;
    font-weight: 600;
  `

  return (
    <>
      <NavTitle>May Day</NavTitle>
      <NavSubtitle>- JOIN US FOR MARY & WILL'S BABY BASH -</NavSubtitle>
      <NavContainer>
        <Link to="/" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>Home</LinkText>
        </Link>
        <Link to="/info" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>Info</LinkText>
        </Link>
        <Link to="/rsvp" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>RSVP</LinkText>
        </Link>
        <Link to="/directions" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>Directions</LinkText>
        </Link>
        <Link to="/registry" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>Registry</LinkText>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#494848' }}>
          <LinkText>Contact</LinkText>
        </Link>
      </NavContainer>
    </>
  );
}

export default Nav;
