import React from 'react'
import './Write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faPlus,faUpload
 } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/Neurons.jpg'


const Write = () => {
  return (
    <div className="blog1__write">
    <img className="blog1__writeImg" src={img} alt="image"/>
    <form className="blog1__writeForm">
      <div className="blog1__writeFormGroup">
      <label htmlFor="fileInput"><span className="blog1__writeIcon"><FontAwesomeIcon icon={faPlus}/></span></label>
        <input type="file" id="fileInput" style={{display:'none'}}/>
        <input type="text" placeholder="Title" className="blog1__writeInput" autoFocus={true}/>

      </div>
      <div className="blog1__writeFormGroup">
        <textarea placeholder="Tell your story" type="text" className="blog1__writeInput blog1__writeText"/>
      </div>
      <button className="blog1__writeSubmit">Publish</button>
    </form>

    </div>
  )
}

export default Write
