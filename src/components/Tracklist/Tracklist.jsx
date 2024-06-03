import React from "react";
import styles from "../Tracklist/Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <>
      <div>
        {props.userSearchResult.map((track) => (
          <Track
            key={track.id}
            artist={track.artist}
            song={track.song}
            track={track}
            id={track.id}
            isRemoval={props.isRemoval}
            onAdd={props.onAdd}
          />
        ))}
      </div>
    </>
  );
}

export default Tracklist;
