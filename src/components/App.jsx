import React, { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

function App() {
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
          <SearchResults />

          <Playlist />
        </div>
      </main>
    </>
  );
}

export default App;
