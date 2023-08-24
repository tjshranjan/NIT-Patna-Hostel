import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WARDEN_PASSWORD, WARDEN_USERNAME } from "../config";
import styles from './Warden.module.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
const Warden = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Username: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env);
    if (data.Username === WARDEN_USERNAME && data.Password === WARDEN_PASSWORD)
      navigate("home");
    else navigate("/");
  };
  return (
    <div className={styles.body}>
    <div className={styles.wrapper}>
      <form>
      <h1>Warden Login</h1>
        <div className={styles['input-box']}>
          <input
            type="text"
            autoComplete='off'
            className="Username"
            name="Username"
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <PersonIcon className={styles['i']} fontSize="small" />
        </div>
        <div className={styles['input-box']}>
          <input
            type="password"
            className="Password"
            name="Password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <LockIcon className={styles['i']} fontSize="small" />
        </div>
        <div className={styles["remember-forgot"]}>
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button className={styles.btn} onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Warden;
