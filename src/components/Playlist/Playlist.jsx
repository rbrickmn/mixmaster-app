import React, { useState } from "react";
import styles from "../Playlist/Playlist.module.css";
import sharedStyles from "../SearchResults/SearchResults.module.css";

function Playlist() {
  return (
    <>
      <div className={styles.PlaylistWrapper}>
        <form>
          <input className={styles.PlaylistNameInput} type="text" id="playlistName" name="playlistName" placeholder="Name your playlist."/>
          <input type="submit" htmlFor="playlistName" className={styles.SubmitName} value="Save"/>
        </form>

        <hr />

        <div className={sharedStyles.SongResult}>
          <div className={sharedStyles.SongContainer}>
            <div className={sharedStyles.AlbumCover}></div>
            <div className={sharedStyles.SongInfo}>
              <p className={sharedStyles.SongTitle}>Song Title</p>
              <p className={sharedStyles.SongArtist}>Artist</p>
            </div>
          </div>

          <div className={sharedStyles.ButtonContainer}>
            <button className={sharedStyles.AddBtn}>
              <img
                className={sharedStyles.AddIcon}
                src="src\assets\remove.svg"
                alt="Remove Song Button"
              />
            </button>
          </div>
        </div>

        <button className={styles.SaveToSpotify}>
          Save to Spotify
        </button>

        <hr />
      </div>
    </>
  );
}

export default Playlist;
