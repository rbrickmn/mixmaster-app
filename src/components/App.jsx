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
      artist: "Yves Tumor",
      song: "Meteora Blues",
      id: 1,
    },
    {
      artist: "Yves Tumor",
      song: "Kerosene!",
      id: 2,
    },
  ]);

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
          <SearchResults userSearchResult={searchResults} />

          <Playlist />
        </div>
      </main>
    </>
  );
}

export default App;
