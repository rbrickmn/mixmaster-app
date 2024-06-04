import React from "react";
import styles from "../SearchResults/SearchResults.module.css";

import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  function showEmpty() {
    if (props.userSearchResult.length === 0) {
      return (
        <p className={styles.EmptyResults}>Search to begin!</p>
      );
    }
  }

  return (
    <div className={styles.SearchResultsWrapper}>
      <p className={styles.ResultsTitle}>Seach Results</p>
      <hr />
      <div className={styles.ResultsContainer}>
        <div className={styles.Results}>
          {showEmpty()}
          <Tracklist
            userSearchResult={props.userSearchResult}
            isRemoval={false} // Set to false to show add button
            onAdd={props.onAdd}
            addedTracks={props.addedTracks}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SearchResults;
