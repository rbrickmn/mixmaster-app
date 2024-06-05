import React from "react";
import styles from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <header>
        <a href="app">
          <img
            src="/mix-master-logo.svg"
            alt="MixMaster Logo"
            className={styles.HeaderLogo}
          />
        </a>
      </header>
    </>
  );
}

export default Header;
