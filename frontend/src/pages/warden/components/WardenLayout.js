import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const WardenLayout = () => {
  return (
    <>
      <div>
        <button className="home">
          <NavLink to={``}>HOME</NavLink>
        </button>

        <button className="addstudent">
          <NavLink to={`addstudent`}>ADD STUDENT</NavLink>
        </button>

        <button className="search">
          <NavLink to={`search`}>SEARCH STUDENT</NavLink>
        </button>

        <button className="complainList">
          <NavLink to={`complainList`}>COMPLAINS</NavLink>
        </button>
        <button className="applicationList">
          <NavLink to={`applicationList`}>APPLICATIONS</NavLink>
        </button>
        <button className="addnotice">
          <NavLink to={`addnotice`}>ADD NOTICE</NavLink>
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default WardenLayout;
