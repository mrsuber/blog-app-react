import React from 'react'
import './Login.css'
import img from '../../images/img.jpg'
const Login = () => {
  return (
    <div className="blog1__login" style={{background:`linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(${img})`}}>
    <span className="blog1__loginTitle">Login</span>
      <form className="blog1__loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter Email" />
        <label>Password</label>
        <input type="password"  />
      <button className="blog1__loginButton">Login</button>
      <button className="blog1__registerButton">Register</button>

      </form>
    </div>
  )
}

export default Login
