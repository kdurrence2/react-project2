import React from 'react'
import styled from 'styled-components';
import RhythmicLarge from '../assets/Rhythmic-large.png';

function Intro() {

  return (
    <Container>
      <h1>Select a playlist to get</h1>
      <img src={RhythmicLarge} alt="Rhymic Logo" />
    </Container>
  )
}

const Container = styled.div`
    h1 {
        font-size: 2rem;
        color: #F28444;
        padding: 1rem;
        font-style: italic;
    }
    img{
        margin: 0.5rem;
        height: 17vh;
        width: auto;

    }
`;


export default Intro