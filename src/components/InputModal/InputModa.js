import React, { useState } from "react";
import Input from "../Input/Input";
// import styles from "./InputModal.module.css";
import styles from "./InputModal.module.css";
import BackgroundShadow from "../BackgroundShadow/BackgroundShadow";

function InputModal(props) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const toggleButtonHandler = () => {
    setToggleBtn(!toggleBtn);
  };
  return (
    <React.Fragment>
      <div
        className={
          !toggleBtn ? styles.inputModal : `${styles.inputModal} ${styles.show}`
        }
      >
        <Input
          value={props.value}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
        />
        <div className={styles.toggleBtn} onClick={toggleButtonHandler}>
          <i className="fas fa-align-justify"></i>
        </div>
      </div>
      {toggleBtn ? <BackgroundShadow clicked={toggleButtonHandler} /> : null};
    </React.Fragment>
  );
}

export default InputModal;
