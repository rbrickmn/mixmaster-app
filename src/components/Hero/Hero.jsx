import React from "react";
import styles from "../Hero/Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.HeroWrapper}>
        <h1>
          Create Playlists <br /> in{" "}
          <span className={styles.HeroHighlight}>seconds.</span>
        </h1>

        <p className={styles.HeroSubtext}>
          Use MixMaster to generate a Spotify playlist in no time.
        </p>
      </div>
    </>
  );
}

export default Hero;
