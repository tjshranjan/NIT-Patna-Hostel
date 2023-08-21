import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const addNotification = () =>
  toast.success("Student Added ⬆", {
    position: "top-right",
    autoClose: 2000,
  });

const AddStudent = () => {
  const [details, setDetails] = useState({
    enroll_id: "",
    roll: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    branch: "",
    year: "",
    room: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/warden/home/addstudent", details);
      addNotification();
      setDetails((prev) => {
        console.log("chal gya");
        return {
          enroll_id: "",
          roll: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          branch: "",
          year: "",
          room: "",
        };
      });

      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>ADD STUDENT</h1>
      <ToastContainer className="notification" />
      <form>
        <input
          type="text"
          className="enroll_id"
          placeholder="enroll_id"
          name="enroll_id"
          onChange={handleChange}
          value={details.enroll_id}
        />
        <input
          type="text"
          className="name"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={details.name}
        />
        <input
          type="email"
          className="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={details.email}
        />
        <input
          type="text"
          className="roll"
          placeholder="roll"
          name="roll"
          onChange={handleChange}
          value={details.roll}
        />
        <input
          type="text"
          className="branch"
          placeholder="branch"
          name="branch"
          onChange={handleChange}
          value={details.branch}
        />
        <input
          type="text"
          className="year"
          placeholder="year"
          name="year"
          onChange={handleChange}
          value={details.year}
        />
        <input
          type="text"
          className="room"
          placeholder="room no"
          name="room"
          onChange={handleChange}
          value={details.room}
        />
        <input
          type="text"
          className="phone"
          placeholder="phone no"
          name="phone"
          onChange={handleChange}
          value={details.phone}
        />
        <input
          type="text"
          className="address"
          placeholder="address"
          name="address"
          onChange={handleChange}
          value={details.address}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </>
  );
};

export default AddStudent;
