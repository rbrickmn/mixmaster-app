import React from "react";
import styles from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <header>
        <a href="app">
          <img
            src="public/mix-master-logo.svg"
            alt="MixMaster Logo"
            className={styles.HeaderLogo}
          />
        </a>

        <button className={styles.HeaderButton}>
          <img src="\public\menu.svg" alt="Menu Button" />
        </button>
      </header>
    </>
  );
}

export default Header;
