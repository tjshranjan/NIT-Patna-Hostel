import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
const ComplainCard = ({ msg , id , handleDelte}) => {
  return (
    <>
      <p>{msg}</p>
      <button onClick={e=>{handleDelte(id)}}><RemoveIcon/></button>
    </>
  );
};

export default ComplainCard;
