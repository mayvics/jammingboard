//import App.css
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../utils/Spotify";

//import 3 components

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  const addTrack = (track) => {
    if (playlistTracks.find((playlistTrack) => playlistTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName( name );
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((playlistTrack) => playlistTrack.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setSearchResults(searchResults);
      updatePlaylistName("My playlist");
      setPlaylistTracks([])
    });
  };

  const search = (term) => {
    console.log(term);
    Spotify.search(term).then((searchResults) =>
      setSearchResults(searchResults)
    );
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            tracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
