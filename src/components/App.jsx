import { useState } from "react";
import styles from "../components/App.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function App() {
  return (
    <>
      <div className={styles.Container}>
        <Header />
      </div>

      <div className={styles.Container}>
        <Hero />
      </div>
    </>
  );
}

export default App;
