import React, { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

function App() {
  return (
    <>
      <div className={styles.Container}>
        <Header />
      </div>

      <div className={styles.Container}>
        <Hero />
      </div>

      <div className={styles.Container}>
        <SearchBar />
      </div>

      <div className={`${styles.Container} ${styles.ResultsPlaylist}`}>
        <SearchResults />
      </div>
    </>
  );
}

export default App;
