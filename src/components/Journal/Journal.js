import React, { useState } from "react";
import Card from "../Card/Card";
import InputModal from "../InputModal/InputModa";

function Journal() {
  const [text, setText] = useState("");
  const [content, setContent] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      setContent((prevState) => {
        return [...prevState, { text: text }];
      });
      setText("");
    } else {
      alert("Enter Text");
    }
  };

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Card content={content} />
      <InputModal
        value={text}
        onChange={changeTextHandler}
        onSubmit={submitHandler}
      />
    </>
  );
}

export default Journal;
