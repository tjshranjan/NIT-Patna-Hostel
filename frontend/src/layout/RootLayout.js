import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const RootLayout = () => {
  return (
    <>
     <Login />
      <Outlet />
    </>
  );
};

export default RootLayout;
