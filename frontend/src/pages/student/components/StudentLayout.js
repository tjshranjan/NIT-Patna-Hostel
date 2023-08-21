import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <button className="home">
        <Link to={``} >Home</Link>
      </button>
      <button className="complain">
        <Link to={`complain`} >Complain</Link>
      </button>
      <button className="application">
        <Link to={`application`} >Application</Link>
      </button>
      <button className="notices">
        <Link to={`notices`} >Notices</Link>
      </button>
      <Outlet />
    </>
  );
};

export default StudentLayout;
