import React, { useState } from "react";

const ApplicationCard = ({ roll, letter }) => {
  return (
    <div >
      <h6>{roll}</h6>
      <p>{letter}</p>
    </div>
  );
};

export default ApplicationCard;
