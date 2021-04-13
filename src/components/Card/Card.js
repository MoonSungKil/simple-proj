import React from "react";
import Segment from "../Segment/Segment";
import styles from "./Card.module.css";

function Card() {
  return (
    <Segment>
      <div>
        <div>
          <h3>Date:</h3>
        </div>
        <div>
          <h3>
            Star Rating:
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className={`fa fa-star ${styles.checked}`}></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </h3>
        </div>
      </div>
    </Segment>
  );
}

export default Card;
