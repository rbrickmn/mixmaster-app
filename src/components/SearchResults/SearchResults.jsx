import React, { useState } from "react";
import styles from "../SearchResults/SearchResults.module.css";

import Track from "../Track/Track";

function SearchResults() {
  return (
    <>
      <div className={styles.SearchResultsWrapper}>
        <p className={styles.ResultsTitle}>Results for "Song Title":</p>

        <hr />

        <div className={styles.Results}>
          <Track />
        </div>

        <hr />
      </div>
    </>
  );
}

export default SearchResults;
