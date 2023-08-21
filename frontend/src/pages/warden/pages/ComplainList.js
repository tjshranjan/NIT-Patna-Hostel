import axios from "axios";
import { memo, useCallback } from "react";
import React, { useEffect, useState } from "react";
import ComplainCard from "../components/ComplainCard";

const ComplainList = () => {
  const [complains, setComplains] = useState([]);
  const helper = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/warden/home/complainList"
      );
      setComplains(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    helper();
  }, [helper]);
  console.log(complains);
  return (
    <>
      {complains.map((complain, index) => (
        <ComplainCard key={index} roll={complain.roll} msg={complain.msg} />
      ))}
    </>
  );
};

export default memo(ComplainList);
