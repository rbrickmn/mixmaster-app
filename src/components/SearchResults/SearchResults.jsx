import React from "react";
import styles from "../SearchResults/SearchResults.module.css";

import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div className={styles.SearchResultsWrapper}>
      <p className={styles.ResultsTitle}>Seach Results</p>
      <hr />
      <div className={styles.Results}>  
        <Tracklist
          userSearchResult={props.userSearchResult}
          isRemoval={false} // Set to false to show add button
          onAdd={props.onAdd}
          addedTracks={props.addedTracks}
        />
      </div>
      <hr />
    </div>
  );
}

export default SearchResults;
