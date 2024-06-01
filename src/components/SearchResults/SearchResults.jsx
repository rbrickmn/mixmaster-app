import React, { useState } from "react";
import styles from "../SearchResults/SearchResults.module.css";

function SearchResults() {
  return (
    <>
      <div className={styles.SearchResultsWrapper}>
        <p className={styles.ResultsTitle}>Results for "Song Title":</p>

        <hr />

        <div className={styles.Results}>
          <div className={styles.SongResult}>
            <div className={styles.SongContainer}>
              <div className={styles.AlbumCover}></div>
              <div className={styles.SongInfo}>
                <p className={styles.SongTitle}>Song Title</p>
                <p className={styles.SongArtist}>Artist</p>
              </div>
            </div>

            <div className={styles.ButtonContainer}>
              <button className={styles.AddBtn}>
                <img
                  className={styles.AddIcon}
                  src="src\assets\add.svg"
                  alt="Add Song Button"
                />
              </button>
            </div>
          </div>

          <div className={styles.SongResult}>
            <div className={styles.SongContainer}>
              <div className={styles.AlbumCover}></div>
              <div className={styles.SongInfo}>
                <p className={styles.SongTitle}>Song Title</p>
                <p className={styles.SongArtist}>Artist</p>
              </div>
            </div>

            <div className={styles.ButtonContainer}>
              <button className={styles.AddBtn}>
                <img
                  className={styles.AddIcon}
                  src="src\assets\add.svg"
                  alt="Add Song Button"
                />
              </button>
            </div>
          </div>

          <div className={styles.SongResult}>
            <div className={styles.SongContainer}>
              <div className={styles.AlbumCover}></div>
              <div className={styles.SongInfo}>
                <p className={styles.SongTitle}>Song Title</p>
                <p className={styles.SongArtist}>Artist</p>
              </div>
            </div>

            <div className={styles.ButtonContainer}>
              <button className={styles.AddBtn}>
                <img
                  className={styles.AddIcon}
                  src="src\assets\add.svg"
                  alt="Add Song Button"
                />
              </button>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default SearchResults;
