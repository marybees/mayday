import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #D3D3D3;
    height: 10vh;
  `;

  return <FooterContainer>Made with love at 20 Roos Road</FooterContainer>;
};

export default Footer;
