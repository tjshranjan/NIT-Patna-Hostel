import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <h1>LOGIN</h1>
      <button><NavLink to={`/warden`}>WARDEN</NavLink></button>
      <button><NavLink to={`/messIncharge`}>Mess Incharge</NavLink></button>
      <button><NavLink to={`/student`}>Student</NavLink></button>
    </>
  )
}

export default Login