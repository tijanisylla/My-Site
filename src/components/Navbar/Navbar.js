import React from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <nav>

     
       
<p className="logo">
 Tijani Sylla
</p>

      
      <input className="menu-btn" type="checkbox" id="menu-btn"/>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
          <li><Link to='main' spy={true} smooth={true} offset={-20} duration={2000} >Home</Link></li>
          <li><Link to='about' spy={true} smooth={true} offset={-20} duration={2000} >About</Link></li>
          <li><Link to='contact' spy={true} smooth={true} offset={-20} duration={2000} >Contact</Link></li>
          <li><Link to='service' spy={true} smooth={true} offset={-20} duration={2000} >Portfolio</Link></li>
      </ul> 
      
    </nav>
  )
}

export default Navbar

