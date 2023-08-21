import React, { useState } from "react";

const MessIncharge = () => {
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
    // console.log("Data", data);
    // check in backend
    // navigate to messinc site
  };
  return (
    <div>
      <h1>Mess Incharge LOGIN</h1>
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

export default MessIncharge;
