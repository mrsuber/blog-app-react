import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faSearch
 } from '@fortawesome/free-solid-svg-icons';

import {Pinterest,Instagram,Facebook,Twitter} from '@material-ui/icons'
import avatar from '../images/me.webp'
import {Link} from 'react-router-dom'

const Topbar = ({user}) => {

  return (
    <div className="blog1__topbar">
    <div className="blog1__top-left">
    <span className="blog1__top-icon"><Facebook/></span>
    <span className="blog1__top-icon"><Twitter /></span>
    <span className="blog1__top-icon"><Pinterest/></span>
    <span className="blog1__top-icon"><Instagram/></span>


    </div>
    <div className="blog1__top-center">
      <ul className="blog1__top-list">
        <li className="blog1__top-listItem"><Link className="blog1__link" to="/">HOME</Link></li >
        <li className="blog1__top-listItem">ABOUT</li >
        <li className="blog1__top-listItem">CONTACT</li >
        <li className="blog1__top-listItem"><Link className="blog1__link" to="/write">WRITE</Link></li >
        <li className="blog1__top-listItem">{user && "LOGOUT"}</li >

      </ul>
    </div>
    <div className="blog1__top-right">
    {user?(<img className="blog1__top-image" src={avatar} alt="avatar" />):
    ( <ul className="blog1__top-list">
      <li className="blog1__top-listItem"><Link className="blog1__link" to="/login">LOGIN </Link></li>
    <li className="blog1__top-listItem"><Link className="blog1__link" to="/register"> REGISTER</Link></li>
    </ul>
  )}
      <span className="blog1__topSearch-icon"><FontAwesomeIcon icon={faSearch}/></span>
    </div>
    </div>
  )
}

export default Topbar
