import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ searchSubmitHandler }) {
  const [term, setTerm] = useState("React Js");
  const onSubmitHandler = (e) => {
    e.preventDefault();

    searchSubmitHandler(term);

    setTerm("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          className={styles.input}
          type="text"
          placeholder="Search"
        />
        <button className={styles.btn}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
