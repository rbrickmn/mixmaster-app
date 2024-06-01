import { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";

function App() {
  return (
    <>
      <div className={styles.Container}>
        <Header />
      </div>
    </>
  );
}

export default App;
