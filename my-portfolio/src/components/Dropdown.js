import React from 'react'
import {Link} from 'react-router-dom'

export default function Dropdown({isOpen, toggle}) {
  return (
    <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-gradient-to-r from-green-50 via-blue-100 to-indigo-50 " : 'hidden'} onClick={toggle}>
       <Link className="p-4" to="/">Home</Link>
       <Link className="p-4" to="/portfolio">Portfolio</Link>
        <Link className="p-4" to="/resume">Resume</Link>
      <Link className="p-4" to="/contact">Contact</Link>
      <Link className="p-4" to="/about">About</Link> 
    </div>
  )
}

