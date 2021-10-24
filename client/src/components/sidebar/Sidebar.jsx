import React from 'react'
import './Sidebar.css'
import img from '../images/me.webp'
import {Pinterest,Instagram,Facebook,Twitter} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className="blog1__sidebar">

    <div className="blog1__sidebarItem">
        <span className="blog1__sidebarTitle">ABOUT ME</span>
        <img src={img} alt="banner" />
        <p>We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
        </p>
    </div>
    <div className="blog1__sidebarItem">
      <span className="blog1__sidebarTitle">CATEGORIES</span>
      <ul className="blog1__sidebarList">
        <li className="blog1__sidebarListItem">Life</li>
        <li className="blog1__sidebarListItem">Music</li>
        <li className="blog1__sidebarListItem">Style</li>
        <li className="blog1__sidebarListItem">Sport</li>
        <li className="blog1__sidebarListItem">Tech</li>
        <li className="blog1__sidebarListItem">Cinema</li>
      </ul>
    </div>
    <div className="blog1__sidebarItem">
    <span className="blog1__sidebarTitle">FOLLOW US</span>
    <div className="blog1__sidebarSocial">

    <span className="blog1__sidebar-icon"><Facebook/></span>
        <span className="blog1__sidebar-icon"><Twitter /></span>
        <span className="blog1__sidebar-icon"><Pinterest/></span>
        <span className="blog1__sidebar-icon"><Instagram/></span>

    </div>


    </div>



    </div>
  )
}

export default Sidebar
