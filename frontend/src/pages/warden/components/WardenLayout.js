import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./WardenLayout.module.css";
const WardenLayout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <button>
          <NavLink className={styles["btn"]} to={``}>
            HOME
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`addstudent`}>
            ADD STUDENT
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`search`}>
            SEARCH STUDENT
          </NavLink>
        </button>

        <button>
          <NavLink className={styles["btn"]} to={`complainList`}>
            COMPLAINS
          </NavLink>
        </button>
        <button>
          <NavLink className={styles["btn"]} to={`applicationList`}>
            APPLICATIONS
          </NavLink>
        </button>
        <button>
          <NavLink className={styles["btn"]} to={`addnotice`}>
            ADD NOTICE
          </NavLink>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default WardenLayout;
