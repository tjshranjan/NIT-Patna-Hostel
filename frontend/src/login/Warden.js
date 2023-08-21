import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WARDEN_PASSWORD, WARDEN_USERNAME } from "../config";

const Warden = () => {
    const navigate = useNavigate()
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
    console.log(process.env)
    if(data.Username===WARDEN_USERNAME && data.Password===WARDEN_PASSWORD) navigate('home')
    else navigate('/')
  };
  return (
    <div>
      <h1>WARDEN LOGIN</h1>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            className="Username"
            name="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="Password"
            name="Password"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Warden;
