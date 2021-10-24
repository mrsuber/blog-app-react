import React from 'react'
import './Settings.css'
import {Sidebar} from '../../../components'
import img from '../../images/me.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faUserCircle
 } from '@fortawesome/free-solid-svg-icons';



const Settings = () => {
  return (
    <div className="blog1__settings">
        <div className="blog1__settingsWrapper">
            <div className="blog1__settingsTitle">
            <span className="blog1__settingsUpdateTitle">Update Your Account</span>
            <span className="blog1__settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="blog1__settingsForm">
              <label>Profile Picture</label>
              <div className="blog1__settingsPP">
                <img src={img} alt="profile" />
                <label htmlFor="fileInput">
                  <span className="blog1__settingsPPIcon"><FontAwesomeIcon icon={faUserCircle} /></span>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
              </div>
              <label>Username</label>
              <input type="text" placeholder="mr suber"/>

              <label>Email</label>
              <input type="email" placeholder="suber@gmail.com"/>

              <label>Password</label>
              <input type="password" />

              <label>Confirm Password</label>
              <input type="password" />
              <button className="blog1__settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings
