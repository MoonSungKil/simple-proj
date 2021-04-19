import React from "react";
import Segment from "../Segment/Segment";
import styles from "./Card.module.css";

function Card(props) {
  const cardContent = props.content.map((card, index) => {
    return (
      <Segment key={index}>
        <div className={styles.text}>{card.text}</div>
      </Segment>
    );
  });
  return <div className={styles.cardCollection}>{cardContent}</div>;
}

export default Card;
