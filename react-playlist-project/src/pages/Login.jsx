import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home.jsx';
import RhythmicLarge from '../assets/Rhythmic-large.png';
import styled from 'styled-components';

function Login() {

  return (
    <Container>
      <img src={RhythmicLarge} alt="Rhymic Logo" />
      <button>Login</button>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 100vh;
    width: 100vw;
    background-color: #FFFFFF;
    gap: 5rem;
    img{
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: #590202;
        color: #FFFFFF;
        font-size: 1.4rem;
        cursor: pointer;
        hover: #F23A29;
    }
`;

export default Login