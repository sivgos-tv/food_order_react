import React from "react";
import styles from "./recentElements.module.css"

function RecentElement(props) {
  return (
    <div className={styles.resultElement}>
      <div className={styles.center}>
      <img style={{margin:"auto"}} src={`${props.img_url}`} height="170" width="230" alt=""></img>
      </div>
      <br />
      <h2 align="left">{props.name}</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <b>{props.address}</b>
        </div>
        <div className={styles.col}>
          <a href="https://www.google.com/search?q=tasty+food">Reorder</a>
        </div>
      </div>
    </div>
  );
}


export default RecentElement;
