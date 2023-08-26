import React, { useState } from "react";
import styles from './ComplainCard.module.css'
const ComplainCard = ({ roll, msg }) => {
  const [clicked,setClicked] = useState(false)
  return (
    <div className={`${styles.card} ${clicked ? styles["one"] : styles["two"]}`}>
      <h6>{roll}</h6>
      <p>{msg}</p>
      <button onClick={e=>{setClicked(prev=>!prev)}}>{clicked ? "remove response" : "send response"}</button>
    </div>
  );
};

export default ComplainCard;
