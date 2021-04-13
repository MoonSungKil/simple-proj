import React, { useState } from "react";
import styles from "./Input.module.css";
function Input() {
  const [text, setText] = useState("");
  const [content, setContent] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setContent((prevState) => {
      return [...prevState, { text: text }];
    });
    console.log(content);
  };

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={styles.form}>
        <label>Brief Daily Summary</label>
        <textarea
          onChange={changeTextHandler}
          type="text"
          placeholder="What you learned today?"
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Input;
