import React, { useState } from "react";
import styles from "../Playlist/Playlist.module.css";

import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
    console.log(target.value); // for testing
  }

  function showEmpty() {
    if (props.playlistTracks.length === 0) {
      return (
        <p className={styles.EmptyPlaylist}>
          Add some songs to your playlist!
        </p>
      );
    }
  }

  return (
    <>
      <div className={styles.PlaylistWrapper}>
        <input
          className={styles.PlaylistNameInput}
          type="text"
          id="playlistName"
          name="playlistName"
          placeholder="Name your playlist."
          onChange={handleNameChange}
        />
        {/* <input
            type="submit"
            htmlFor="playlistName"
            className={styles.SubmitName}
            value="Save"
          /> */}

        <hr />

        {showEmpty()}

        <Tracklist
          userSearchResult={props.playlistTracks}
          onRemove={props.onRemove}
          isRemoval={true}
        />

        <button className={styles.SaveToSpotify} onClick={props.onSave}>
          Save to Spotify
        </button>

        <hr />
      </div>
    </>
  );
}

export default Playlist;
