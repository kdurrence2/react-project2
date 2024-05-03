import React from 'react';
import styled from 'styled-components';

function Playlists() {

  return (
    <Container>
    <h1>Playlists</h1>
      <ul>
        <li>Study Jams</li>
        <li>Rainy Weather Lofi</li>
        <li>Cosmic Vibes</li>
        <li>Indie Mix</li>
        <li>Got to Focus</li>
        <li>Unwind</li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
    h1{
        font-size: 1.35rem;
        margin-top: 5.5rem;
        padding: 1rem;
    }
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    li{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #F2EFBD;
        }
    }
`;

export default Playlists