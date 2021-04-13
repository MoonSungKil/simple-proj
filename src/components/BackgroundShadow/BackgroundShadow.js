import React from "react";
import styles from "./BackgroundShadow.module.css";
function BackgroundShadow(props) {
  return (
    <div onClick={props.clicked} className={styles.backgroundShadow}></div>
  );
}

export default BackgroundShadow;
