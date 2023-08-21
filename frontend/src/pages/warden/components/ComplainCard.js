import React, { useState } from "react";

const ComplainCard = ({ roll, msg }) => {
    const [clicked,setClicked] = useState(false)
  return (
    <div style={{'borderBlockStyle':'solid', 'backgroundColor': !clicked ? 'red':'green'}}>
      <h6>{roll}</h6>
      <p>{msg}</p>
      <button onClick={e=>setClicked(prev=>!prev)}>Resolved</button>
    </div>
  );
};

export default ComplainCard;
