import React from 'react'
import './SinglePost.css'
import img from '../images/Neurons.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faEdit,faTrashAlt
 } from '@fortawesome/free-solid-svg-icons';


const SinglePost = () => {
  return (
    <div className="blog1__singlePost">
    <div className="blog1__singlePostWrapper"></div>
      < img className="blog1__singlePostImg" src={img} alt="singlepost" />
      <h1 className="blog1__singlePostTitle">
      This is a single post Title
      <div className="blog1__singlePostEdit">
      <span className="blog1__singlePostIcon"><FontAwesomeIcon icon={faEdit}/></span>
      <span className="blog1__singlePostIcon">  <FontAwesomeIcon icon={faTrashAlt}/></span>
      </div>
      </h1>
      <div className="blog1__singlePostInfo">
        <span className="blog1__singlePostAuthor">Author: <b>Mohamad</b></span>
        <span className="blog1__singlePostDate">1 hour ago</span>


      </div>
      <p className="blog1__singlePostDesc">
      We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
      We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
      We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.

      </p>
    </div>
  )
}

export default SinglePost
