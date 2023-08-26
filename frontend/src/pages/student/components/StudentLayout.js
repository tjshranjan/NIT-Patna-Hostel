import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <div className="flex">
        <button className="home">
          <Link to={``}>Home</Link>
        </button>
        <button className="">
          <Link to={`complain`}>Complain</Link>
        </button>
        <button className="">
          <Link to={`application`}>Application</Link>
        </button>
        <button className="">
          <Link to={`notices`}>Notices</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default StudentLayout;
