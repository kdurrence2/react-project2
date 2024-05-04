import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
`;

const Body = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
`;

const BodyContents = styled.div`
    text-align: center;
    align-items: center;
    margin-top: 6rem;
    margin-bottom: 6rem;
`;

const FavoriteGenres = styled.div`
    display: flex;
    align-items: center;

    .genre {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2rem;

        .icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: #fff;
        }

        .title {
            color: #fff;
            font-size: 0.8rem;
        }
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
              <FavoriteGenres>
                {user.favoriteGenres.map((genre, index) => (
                  <div className="genre" key={index}>
                    <FontAwesomeIcon icon={faCircle} className="icon" />
                    <p className="title">{genre}</p>
                  </div>
                ))}
              </FavoriteGenres>
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
