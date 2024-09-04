import { IoSettingsOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import'./Navbar.css'

const Navbar = () => {

    const[sticky,setStickey]=useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY> 50 ? setStickey(true): setStickey(false)
      })
    },[]);

  return (
   <nav className={`container ${sticky ? 'dark-nav':''} navbar`}>
    <img src="/assets/logo.jpeg" alt="" className='logo navbar-start'/>
    <ul className="navbar-end">
        <li><a className="btns" href='#hero'>Home</a></li>
        <li><a className="btns" href='#program'>Program</a></li>
        <li><a className="btns" href='#about'>About us</a></li>
        <li><a className="btns" href='#sectors'>Dashboard</a></li>
        <li><a className="btns" href='#faq'>FAQs</a></li>
        <li><a className="btns" href='#contact'>ContactUs</a></li>
    </ul>
   </nav>
  )
}

export default Navbar
