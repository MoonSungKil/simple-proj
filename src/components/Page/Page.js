import React from "react";
import "./Page.module.css";

function Page(props) {
  return (
    <React.Fragment>
      <h1>{props.number}</h1>
    </React.Fragment>
  );
}

export default Page;
