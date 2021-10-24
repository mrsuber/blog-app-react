import React from 'react'
import './Register.css'
import img from '../../images/img.jpg'

const Register = () => {
  return (
    <div className="blog1__register" style={{background:`linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(${img})`}}>
    <span className="blog1__registerTitle">Register</span>
      <form className="blog1__registerForm">
      <label>Username</label>
      <input type="text" placeholder="Enter Username" />

        <label>Email</label>
        <input type="text" placeholder="Enter Email" />
        <label>Password</label>
        <input type="password"  />
        <label>Confirm Password</label>
        <input type="password"  />
      <button className="blog1__registerButton2">register</button>
      <button className="blog1__loginButton2">Login</button>

      </form>
    </div>
  )
}

export default Register
