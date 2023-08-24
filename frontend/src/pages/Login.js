import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h1>LOGIN</h1>
        <button>
          <NavLink className={styles['link']} to={`/warden`}>WARDEN</NavLink>
        </button>
        <button>
          <NavLink className={styles['link']} to={`/messIncharge`}>Mess Incharge</NavLink>
        </button>
        <button>
          <NavLink className={styles['link']} to={`/student`}>Student</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Login;
