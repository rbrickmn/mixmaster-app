import React from "react";
import styles from "../Track/Track.module.css";

function Track(props) {
  function renderAction() {
    if (props.isRemoval) {
      return (
        <img
          className={styles["AddIcon"]}
          src="src\assets\add.svg"
          alt="Add Song Button"
        />
      );
    } else {
      return (
        <img
          className={styles["AddIcon"]}
          src="src\assets\remove.svg"
          alt="Remove Song Button"
        />
      );
    }
  }

  function passTrack() {
    props.onAdd(props.track);
  }

  return (
    <>
      <div className={styles.Song}>
        <div className={styles.SongContainer}>
          <div className={styles.AlbumCover}></div>
          <div className={styles.SongInfo}>
            <p className={styles.SongTitle}>{props.song}</p>
            <p className={styles.SongArtist}>{props.artist}</p>
          </div>
        </div>

        <div className={styles.ButtonContainer}>
          <button className={styles.AddBtn} onClick={passTrack}>
            {renderAction()}
          </button>
        </div>
      </div>
    </>
  );
}

export default Track;
