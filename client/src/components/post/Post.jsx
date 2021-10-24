import React from 'react'
import './Post.css'
import img from '../images/Neurons.jpg'
const Post = () => {
  return (
    <div className="blog1__post">
    < img className="blog1__postImg"  src={img} alt="image" />
    <div className="blog1__postInfo">
      <div className="blog1__postCats">
        <span className="blog1__postCat">Music</span>
        <span className="blog1__postCat">Life</span>

      </div>
      <span className="blog1__postTitle"> Front End Developer.</span>
      <hr/>
      <span className="blog1__postDate">1 hour ago</span>
    </div>
    <p className="blog1__postDesc">We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
    We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
    We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
    We are actively looking for a Front End Developer to join a team working on a web application for one of the largest telecoms companies in the world. You will be part of small self organising and fast-moving development team.
    
    </p>
    </div>
  )
}

export default Post
