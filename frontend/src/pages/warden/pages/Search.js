import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./Search.module.css";
import Card from "../components/Card";
const addNotification = () =>
  toast.success("No Student Found ⬆", {
    position: "top-right",
    autoClose: 2000,
  });

const Search = () => {
  const [id, setId] = useState("");
  const [log, setLog] = useState(false);
  const [studentDetails, setStudentDetails] = useState({});

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/warden/home/search", {
        id,
      });
      if (!res.data) {
        // alert("No student found");
        addNotification();
      } else {
        console.log(res.data);
        setStudentDetails(res.data);
        setLog(true);
      }
      setId("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.body}>
      <ToastContainer className="notification" />
      <h2>Search for Student</h2>
      <div className={styles["input-button"]}>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <button className={styles['find']} onClick={handleClick}>Find</button>
      </div>
      {log && <Card data={studentDetails} />}
    </div>
  );
  // return (
  //   <div>
  //     <button>search by</button>
  //     <select name="options" id="" >
  //       <option value="roll">roll</option>
  //       <option value="roll">branch</option>
  //       <option value="roll">year</option>
  //     </select>
  //   </div>
  // )
};

export default Search;
