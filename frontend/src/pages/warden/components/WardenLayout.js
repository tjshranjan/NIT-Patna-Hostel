import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./WardenLayout.module.css";
const WardenLayout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <button>
          <NavLink className={styles["btn"]} to={``}>
            Home
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`addstudent`}>
            Add Student
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`search`}>
            Search Student
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`complainList`}>
            Complains
          </NavLink>
        </button>
        <button>
          <NavLink className={styles["btn"]} to={`applicationList`}>
            Applications
          </NavLink>
        </button>
        <button>
          <NavLink className={styles["btn"]} to={`addnotice`}>
            Add Notice
          </NavLink>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default WardenLayout;
