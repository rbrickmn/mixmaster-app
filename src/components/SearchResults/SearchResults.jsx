import React, { useState } from "react";
import styles from "../SearchResults/SearchResults.module.css";

import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <>
      <div className={styles.SearchResultsWrapper}>
        <p className={styles.ResultsTitle}>Results for "Song Title":</p>

        <hr />

        <div className={styles.Results}>
          <Tracklist userSearchResult={props.userSearchResult} />
        </div>

        <hr />
      </div>
    </>
  );
}

export default SearchResults;
