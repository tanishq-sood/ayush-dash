import { IoSettingsOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/assets/logo.jpeg'
import Image from 'next/image'
import './Navbar.css'

const Navbar = () => {

  const [sticky, setStickey] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStickey(true) : setStickey(false)
    })
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} navbar`}>
      <Image src={Logo} alt="" className='logo navbar-start' />
      <ul className="navbar-end">
        <li><a className="btns" href='#hero'>Home</a></li>
        {/* <li><a className="btns" href='#program'>Program</a></li> */}
        <li><a className="btns" href='#about'>About us</a></li>
        {/* <li><a className="btns" href='#sectors'>Sectors</a></li> */}
        {/* <li><a className="btns" href='#faq'>FAQs</a></li> */}
        <li><a className="btns" href='#contact'>ContactUs</a></li>
        <li>
          <div className="dropdown dropdown-bottom dropdown-end justify-center items-center flex">
            <div tabIndex={0} role="button" className="m-1"><IoSettingsOutline color="#253528" size={30}/></div>
            <ul tabIndex={0} className="dropdown-content menu bg-[#49654e] rounded-box z-[1] w-52 p-2 mt-5 shadow">
              Language
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
