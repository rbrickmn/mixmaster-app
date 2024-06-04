import React, { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import { Spotify } from "./util/Spotify/Spotify";

function App() {
  // Mount the spotify API on app load
  Spotify.getAccessToken();

  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [addedTracks, setAddedTracks] = useState([]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    if (existingTrack) {
      alert("Track already exists in playlist");
    } else {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      setAddedTracks((prevAdded) => [...prevAdded, track.id]);
    }
  }

  function removeTrack(track) {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
    setAddedTracks((prevAdded) => prevAdded.filter((id) => id !== track.id));
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    if (playlistTracks.length === 0) {
      alert("Please add some songs to your playlist");
    } else {
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
        setSearchResults([]);
        setAddedTracks([]);
      });
    }
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return (
    <>
      <div className={styles.Container}>
        <Header />
      </div>

      <main>
        <div className={styles.Container}>
          <Hero />
        </div>

        <div className={styles.Container}>
          <SearchBar onSearch={search} />
        </div>

        <div className={`${styles.Container} ${styles.ResultsPlaylist}`}>
          <SearchResults
            userSearchResult={searchResults}
            onAdd={addTrack}
            addedTracks={addedTracks}
          />

          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </main>
    </>
  );
}

export default App;
