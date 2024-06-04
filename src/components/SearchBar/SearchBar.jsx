import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  return (
    <>
      <div className={styles.SearchBarWrapper}>
        <div className={styles.FormWrapper}>
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Search a song to begin..."
            onChange={handleTermChange}
          />
          <button className={styles.SearchButton} onClick={passTerm}>
            <img src="src\assets\search.svg" alt="Search Button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
