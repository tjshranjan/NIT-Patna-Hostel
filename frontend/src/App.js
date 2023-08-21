import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import Warden from "./login/Warden";
import MessIncharge from "./login/MessIncharge";
import Student from "./login/Student";
import AddStudent from "./pages/warden/pages/AddStudent";
import WardenLayout from "./pages/warden/components/WardenLayout";
import Search from "./pages/warden/pages/Search";
import WardenHome from "./pages/warden/pages/WardenHome";
import PageNotFound from "./pages/PageNotFound";
import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config";
import StudentHome from "./pages/student/components/StudentHome";
import StudentLayout from "./pages/student/components/StudentLayout";
import Complain from "./pages/student/pages/Complain";
import ComplainList from "./pages/warden/pages/ComplainList";
import Application from "./pages/student/pages/Application";
import ApplicationList from "./pages/warden/pages/ApplicationList";
import Notices from "./pages/student/components/Notices";
import AddNotice from "./pages/warden/pages/AddNotice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="warden">
          <Route index element={<Warden />} />
          <Route path="home" element={<WardenLayout />}>
            <Route index element={<WardenHome />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="search" element={<Search />} />
            <Route path="complainList" element={<ComplainList />} />
            <Route path="applicationList" element={<ApplicationList />} />
            <Route path="addnotice" element={<AddNotice />} />
          </Route>
        </Route>
        <Route path="messIncharge" element={<MessIncharge />} />
        <Route path="student">
          <Route index element={<Student />} />
          <Route path=":id" element={<StudentLayout />}>
            <Route index element={<StudentHome />} />
            <Route path="complain" element={<Complain />} />
            <Route path="application" element={<Application />} />
            <Route path="notices" element={<Notices />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
