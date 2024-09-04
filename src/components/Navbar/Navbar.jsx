/* eslint-disable no-unused-vars */
import { IoSettingsOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {

    const[sticky,setStickey]=useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY> 50 ? setStickey(true): setStickey(false)
      })
    },[]);

  return (
   <nav className={`container ${sticky ? 'dark-nav':''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul>
        <li><a className="btn" href='#hero'>Home</a></li>
        <li><a className="btn" href='#program'>Program</a></li>
        <li><a className="btn" href='#about'>About us</a></li>
        <li><a className="btn" href='#sectors'>Dashboard</a></li>
        <li><a className="btn" href='#faq'>FAQs</a></li>
        <li><a className="btn" href='#contact'>ContactUs</a></li>
        <li><IoSettingsOutline color="black" size={25}/></li>
        {/* <li><button className='btn'><Link to='Programs' smooth={true} offset={0} duration={500}>About Us</Link></button></li>
        <li><button className='btn'><Link to='#about' smooth={true} offset={0} duration={500}>Program</Link></button></li>
        <li><button className='btn'><Link to='Sectors' smooth={true} offset={0} duration={500}>Register</Link></button></li>
        <li><button className='btn'><Link to='FAQs' smooth={true} offset={0} duration={500}>Dashboard</Link></button></li>
        <li><button><Link className='btn' to='Contact' smooth={true} offset={0} duration={500}>Contact Us</Link></button></li> */}
    </ul>
   </nav>
  )
}

export default Navbar
