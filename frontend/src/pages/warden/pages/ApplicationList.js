import axios from "axios";
import { memo, useCallback } from "react";
import React, { useEffect, useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const helper = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/warden/home/applicationList"
      );
      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    helper();
  }, [helper]);
  return (
    <>
      {applications.map((application, index) => (
        <ApplicationCard
          key={index}
          roll={application.roll}
          letter={application.letter}
        />
      ))}
    </>
  );
};

export default memo(ApplicationList);
