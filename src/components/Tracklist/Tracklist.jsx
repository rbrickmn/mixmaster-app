import React from "react";
import styles from "../Tracklist/Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  

  return (
    <div>
      {props.userSearchResult.map((track) => (
        <Track
          key={track.id}
          artist={track.artist}
          song={track.song}
          cover={track.image}
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
