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
          />
          <button className={styles.SearchButton} onMouseDown={passTerm} onMouseUp={resetSearchBar} >
            <img src="src\assets\search.svg" alt="Search Button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
