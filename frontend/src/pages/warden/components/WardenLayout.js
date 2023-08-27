import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import styles from "./WardenLayout.module.css";
const WardenLayout = () => {
  if (!localStorage.getItem("warden_logged_in")) {
    return (
      <>
        <h1>Sorry , You can't access this Page</h1>
      </>
    );
  } else
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
          <NavLink className={styles['logout']} to={`/`}>LogOut</NavLink>
        </div>
        <Outlet />
      </div>
    );
};

export default WardenLayout;
