import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={styles.SearchBarWrapper}>
        <form>
          <input
            className={styles.SearchBar}
            type="text"
            placeholder="Search a song to begin..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={styles.SearchButton}>
            <img src="src\assets\search.svg" alt="Search Button" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
