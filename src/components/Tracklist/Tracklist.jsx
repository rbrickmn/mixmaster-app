import React from "react";
import styles from "../Tracklist/Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  function showEmpty() {
    if (props.userSearchResult.length === 0) {
      return (
        <p className={styles.EmptyPlaylist}>
          Add some songs to your playlist!
        </p>
      );
    }
  }

  return (
    <div>
      {showEmpty()}
      {props.userSearchResult.map((track) => (
        <Track
          key={track.id}
          artist={track.artist}
          song={track.song}
          track={track} // Pass the whole track object
          isRemoval={props.isRemoval}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          addedTracks={props.addedTracks}
        />
      ))}
    </div>
  );
}

export default Tracklist;
