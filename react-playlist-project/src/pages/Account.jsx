import React from 'react';

function ProfilePage() {
  const user = {
    name: 'John Doe',
    bio: 'Music lover | Guitarist | Singer',
    favoriteGenres: ['Rock', 'Pop', 'Jazz'],
    favoriteArtists: ['The Beatles', 'Taylor Swift', 'John Mayer'],
    favoriteSongs: ['Bohemian Rhapsody', 'Shake It Off', 'Gravity'],
  };

  return (
    <div>
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
  );
}

export default ProfilePage;