import React from "react";
import styles from "../Track/Track.module.css";

function Track(props) {
  return (
    <>
      <div className={styles.Song}>
        <div className={styles.SongContainer}>
          <div className={styles.AlbumCover}></div>
          <div className={styles.SongInfo}>
            <p className={styles.SongTitle}>
              {props.song}
            </p>
            <p className={styles.SongArtist}>{props.artist}</p>
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
    </>
  );
}

export default Track;