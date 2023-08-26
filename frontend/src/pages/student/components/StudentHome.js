import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonalProfile from "./PersonalProfile";

const StudentHome = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const helper = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/student/" + id);
      // console.log(res.data)
      setLoading(false);
      setStudentDetails(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    helper();
  }, [helper]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  const { enroll_id, roll, name, email, phone, address, branch, year, room } = studentDetails;
  return (
    <div>
      <PersonalProfile
        name={name}
        email={email}
        phone={phone}
        address={address}
        enroll_id={enroll_id}
        roll={roll}
        branch={branch}
        year={year}
        room={room}
      />
    </div>
  );
};

export default StudentHome;
