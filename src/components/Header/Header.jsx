import React from "react";
import styles from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <header>
        <img src="src\assets\mix-master-logo.svg" alt="MixMaster Logo" className={styles.HeaderLogo} />

        <button className={styles.HeaderButton}>
          <img src="src\assets\menu.svg" alt="Menu Button" />
        </button>
      </header>
    </>
  );
}

export default Header;
