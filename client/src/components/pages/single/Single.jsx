import React from 'react'
import './Single.css'
import {Sidebar,SinglePost} from '../../../components'
const Single = () => {
  return (
    <div className='blog1__single'>
    <SinglePost/>
    <Sidebar />
    </div>
  )
}

export default Single
