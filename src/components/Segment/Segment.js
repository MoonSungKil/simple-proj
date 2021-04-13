import React from "react";
import styles from "./Segment.module.css";

function Segment(props) {
  return (
    <div className={styles.segment}>
      <div className={styles.children}>{props.children}</div>
      <div className={styles.buttons}>
        <button className={`${styles.buttonGreen} ${styles.btn}`}>
          Approve
        </button>
        <button className={`${styles.buttonRed} ${styles.btn}`}>Reject</button>
      </div>
    </div>
  );
}
export default Segment;
