import React from "react";
import styles from "../Track/Track.module.css";

function Track(props) {
  const isAdded = props.addedTracks ? props.addedTracks.includes(props.track.id) : false;

  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className={styles["AddBtn"]} onClick={passTrackToRemove}>
          <img
            className={styles["AddIcon"]}
            src="src\\assets\\remove.svg"
            alt="Remove Song Button"
          />
        </button>
      );
    } else {
      return (
        <button className={isAdded ? styles["Checked"] : styles["AddBtn"]} onClick={passTrack}>
          <img
            className={styles["AddIcon"]}
            src={isAdded ? "src\\assets\\checked.svg" : "src\\assets\\add.svg"}
            alt={isAdded ? "Check Icon" : "Add Song Button"}
          />
        </button>
      );
    }
  }

  function passTrack() {
    if (!isAdded) {
      props.onAdd(props.track);
    } else {
      alert("Track already exists in playlist");
    }
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }

  return (
    <div className={styles.Song}>
      <div className={styles.SongContainer}>
        <div className={styles.AlbumCover}>{props.track.image}</div>
        <div className={styles.SongInfo}>
          <p className={styles.SongTitle}>{props.track.name}</p>
          <p className={styles.SongArtist}>{props.track.artist}</p>
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        {renderAction()}
      </div>
    </div>
  );
}

export default Track;
