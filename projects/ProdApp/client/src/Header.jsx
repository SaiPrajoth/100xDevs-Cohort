// import React from 'react'
import logo from './logo.png'
import { FaCircleInfo } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Header() {
  return (
    <main>
        <header>
        <img className='logo-image' src={logo} alt="ProdApp-logo"/>
        <nav className="nav-links">
            <FaCircleInfo className='info-icon'/>
            <FaUser className='user-icon'/>
        </nav>
        </header>
    </main>
      
  
  )
}
