import React, { useState } from "react";
import styles from "./Segment.module.css";

function Segment(props) {
  const [toggleClass, setToggleClass] = useState(false);
  const setToggleClassHandler = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div
      className={
        !toggleClass ? styles.segment : `${styles.segment} ${styles.active}`
      }
      onClick={setToggleClassHandler}
    >
      <div className={styles.children}>{props.children}</div>
      {toggleClass ? (
        <div className={styles.buttons}>
          <button className={styles.btn}>
            X
            <span>
              (Deleting this component will permanently remove it from the Blog
              as well from the Local Storage and Database)
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
export default Segment;
