import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;

    .homeBody {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: #590202;
    }

    .body {
        height: 100%;
        width: 100%;
        overflow: auto;
    }

    .bodyContents {
        text-align: center;
        align-items: center;
        margin-top: 6rem;
        margin-bottom: 6rem;
    }
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
      <div className="homeBody">
        <div className="body">
          <div className="bodyContents">
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
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProfilePage;
