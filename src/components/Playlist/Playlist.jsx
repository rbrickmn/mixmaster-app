import React, { useState } from "react";
import styles from "../Playlist/Playlist.module.css";

import Track from "../Track/Track";

function Playlist() {
  return (
    <>
      <div className={styles.PlaylistWrapper}>
        <form>
          <input className={styles.PlaylistNameInput} type="text" id="playlistName" name="playlistName" placeholder="Name your playlist."/>
          <input type="submit" htmlFor="playlistName" className={styles.SubmitName} value="Save"/>
        </form>

        <hr />

        <Track />

        <button className={styles.SaveToSpotify}>
          Save to Spotify
        </button>

        <hr />
      </div>
    </>
  );
}

export default Playlist;
