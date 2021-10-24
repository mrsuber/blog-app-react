import React from 'react'
import './Header.css'
import img1 from '../images/img.jpg'
const Header = () => {
  return (
    <div className="blog1__header">
        <div className="blog1__headerTitles">
          <span className="blog1__headerTitleSm">React & Node </span>
          <span className="blog1__headerTitleLg">Blog </span>
        </div>
        <img className="blog1__headerImg" src={img1} alt="img"/>

    </div>
  )
}

export default Header
