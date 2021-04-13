import React from "react";
import Page from "../Page/Page";
import "./Pages.module.css";

function Pages(props) {
  return (
    <React.Fragment>
      {props.numbers.map((num) => {
        return <Page key={num} number={num} />;
      })}
    </React.Fragment>
  );
}

export default Pages;
