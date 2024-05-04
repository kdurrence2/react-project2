import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
`;

const HomeBody = styled.div`
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background-color: #590202;
    color: #000000;
`;

const Body = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    color: #000000;
`;

const BodyContents = styled.div`
    text-align: center;
    align-items: center;
    margin-top: 6rem;
    margin-bottom: 6rem;
    color: #000000;
`;

function ProfilePage() {
  const user = {
    name: 'John Doe',
    bio: 'Music lover | Guitarist | Singer',
    favoriteGenres: ['Rock', 'Pop', 'Jazz'],
    favoriteArtists: ['The Beatles', 'Taylor Swift', 'John Mayer'],
    favoriteSongs: ['Bohemian Rhapsody', 'Shake It Off', 'Gravity'],
  };

  return (
    <Container>
      <HomeBody>
        <Body>
          <BodyContents>
            <h1>Profile</h1>
            <div>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
            <div>
              <h3>Favorite Genres</h3>
              <ul>
                {user.favoriteGenres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Favorite Artists</h3>
              <ul>
                {user.favoriteArtists.map((artist, index) => (
                  <li key={index}>{artist}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Favorite Songs</h3>
              <ul>
                {user.favoriteSongs.map((song, index) => (
                  <li key={index}>{song}</li>
                ))}
              </ul>
            </div>
          </BodyContents>
        </Body>
      </HomeBody>
    </Container>
  );
}

export default ProfilePage;
