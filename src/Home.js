import React from 'react';
import styled from "styled-components";

const Home = () => {

  const HomeInfoContainer = styled.div`
    margin: 64px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9bdc5;
    font-size: 30px;
    color: white;
    font-weight: 600;
  `
  return (
    <>
      <HomeInfoContainer>
        <p>Help us plan seating and food!</p>
        <p>Please RSVP by July 1st.</p>
        <p>We look forward to seeing you there.</p>
      </HomeInfoContainer>
    </>
  )
}

export default Home