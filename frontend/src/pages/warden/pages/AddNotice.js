import React, { useState } from "react";
import "./AddNotice.css";
import AddIcon from "@mui/icons-material/Add";
const AddNotice = () => {
  const [text, setText] = useState("");
  return (
    <>
      <textarea
        name="notice"
        id=""
        cols="120"
        rows="15"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write notice here"
      />
      <button className="addIcon">
        <AddIcon />
      </button>
    </>
  );
};

export default AddNotice;
