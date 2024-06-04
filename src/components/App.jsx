import React, { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      artist: "Led Zeppelin",
      song: "Stairway To Heaven",
      id: 1,
    },
    {
      artist: "Yves Tumor",
      song: "Kerosene!",
      id: 2,
    },
    {
      artist: "Pink Floyd",
      song: "Wish You Were Here",
      id: 3,
    },
  ]);

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
          <SearchBar />
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
          />
        </div>
      </main>
    </>
  );
}

export default App;
