import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
    if (term === "") {
      alert("Please enter a search term");
    }
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onSearch(term);
      if (term === "") {
        alert("Please enter a search term");
      }
    }
  }

  function resetSearchBar() {
    setTerm("");
  }

  return (
    <>
      <div className={styles.SearchBarWrapper}>
        <div className={styles.FormWrapper}>
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Search a song to begin..."
            value={term}
            onChange={handleTermChange}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.SearchButton} onMouseDown={passTerm} onMouseUp={resetSearchBar} >
            <img src="\public\search.svg" alt="Search Button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
