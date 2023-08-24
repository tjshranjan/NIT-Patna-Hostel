import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './Card.module.css'

const Card = ({ data }) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    enroll_id: data.enroll_id,
    roll: data.roll,
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    branch: data.branch,
    year: data.year,
    room: data.room,
  });
  const handleRemove = async (e) => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/warden/home/search/" + data.roll
      );
      if (res.status === 200) {
        navigate("../");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (e) => {
    setClicked(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleUpdate = async (e) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/warden/home/search/" + data.roll,
        updatedDetails
      );
      if (res.status === 200) {
        alert("updated successfully");
        navigate("../");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (clicked) {
    return (
      <div className={styles.data}>
        <h2>Updation for {data.roll}</h2>
        <input
          type="text"
          className="enroll_id"
          placeholder="enroll_id"
          name="enroll_id"
          onChange={handleChange}
          defaultValue={data.enroll_id}
        />
        <input
          type="text"
          className="name"
          placeholder="name"
          name="name"
          onChange={handleChange}
          defaultValue={data.name}
        />
        <input
          type="email"
          className="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          defaultValue={data.email}
        />
        <input
          type="text"
          className="roll"
          placeholder="roll"
          name="roll"
          onChange={handleChange}
          defaultValue={data.roll}
        />
        <input
          type="text"
          className="branch"
          placeholder="branch"
          name="branch"
          onChange={handleChange}
          defaultValue={data.branch}
        />
        <input
          type="text"
          className="year"
          placeholder="year"
          name="year"
          onChange={handleChange}
          defaultValue={data.year}
        />
        <input
          type="text"
          className="room"
          placeholder="room no"
          name="room"
          onChange={handleChange}
          defaultValue={data.room}
        />
        <input
          type="text"
          className="phone"
          placeholder="phone no"
          name="phone"
          onChange={handleChange}
          defaultValue={data.phone}
        />
        <input
          type="text"
          className="address"
          placeholder="address"
          name="address"
          onChange={handleChange}
          defaultValue={data.address}
        />
        <button className={styles['btn']} onClick={handleUpdate}>UPDATE</button>
      </div>
    );
  }
  return (
    <div className={styles.data}>
      <p>{`Name = ${data.name}`}</p>
      <p>{`Enroll No = ${data.enroll_id}`}</p>
      <p>{`Phone No = ${data.phone}`}</p>
      <p>{`Email = ${data.email}`}</p>
      <p>{`Roll = ${data.roll}`}</p>
      <p>{`Branch = ${data.branch}`}</p>
      <p>{`Year = ${data.year}`}</p>
      <p>{`Room No = ${data.room}`}</p>
      <p>{`Address = ${data.address}`}</p>
      <button className={styles['btn']} onClick={handleRemove}>Remove Student</button>
      <button className={styles['btn']} onClick={handleEdit}>Edit Details</button>
    </div>
  );
};

export default Card;
