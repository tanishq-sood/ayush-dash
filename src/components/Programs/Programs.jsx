/* eslint-disable no-unused-vars */
import { GiMagnifyingGlass } from "react-icons/gi";
import React from 'react'
import './Programs.css'
import program1 from'../../assets/viewdashboard.jpg'
import program2 from'../../assets/exploreforms.jpg'
import program3 from'../../assets/uploadfile.jpg'
// import planticon from '../../assets/playicon1.png'

const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className='program'>
        <img src={program1} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass size={70}  />
            <p>VIEW DASHBOARD</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass  size={70} />
            <p>EXPLORE FORMS</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass  size={70} />
            <p>UPLOAD FILES </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
