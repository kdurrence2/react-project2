import React from 'react';
import styled from 'styled-components';
import RhythmicSmall from "../assets/Rhythmic-small.png"

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
      <div className='HomeBody'>
        <div className='Body'>
          <img src={RhythmicSmall} alt="Logo"></img>
          <div className='BodyContents'>
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

const Container = styled.div`
  .HomeBody{
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    color: #000000;
  }
  .Body {
    height: 100%;
    width: 100%;
    color: #000000;
    img{
      margin-left: 43vw;
      margin-top: 10vh;
    }
  }
  .BodyContents{
    text-align: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 6rem;
    color: #000000;
    padding: 1rem;
    h1{
      padding: 0.7rem;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    h2{
      padding: 0.6rem;
      font-size: 1.4rem;
      margin-top: 1rem;
    }
    h3{
      padding: 0.5rem;
      font-size: 1.3rem;
      margin-top: 1rem;
    }
    li {
      padding: 0.3rem;
      list-style: none;

    }
  }
`;

export default ProfilePage;