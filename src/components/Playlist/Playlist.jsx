import React, { useState } from "react";
import styles from "../Playlist/Playlist.module.css";

function Playlist() {
  return (
    <>
      <div className={styles.PlaylistWrapper}>
        <p className={styles.PlaylistTitle}>New Playlist</p>

        <hr />
      </div>
    </>
  );
}

export default Playlist;
