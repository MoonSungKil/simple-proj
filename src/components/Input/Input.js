import React from "react";
import styles from "./Input.module.css";
function Input(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit} className={styles.form}>
        <label>Brief Daily Summary</label>
        <textarea
          onChange={props.onChange}
          type="text"
          value={props.value}
          placeholder="What you learned today?"
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Input;
