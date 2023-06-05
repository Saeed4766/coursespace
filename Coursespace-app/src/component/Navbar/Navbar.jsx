import React from 'react'
import './Navbar.css'
// import {Link } from 'react-router-dom'

import NavButton from './NavButton'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
            <h2 style={{transform:'translateX(-27px)'}}>Course<span style={{color:'#127C71'}}>space</span></h2>
            <ul>
              {/* <Link to='/card'>wale</Link> */}
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li> <a href="#">Testimonial</a> </li>
                <li> <a href="#"> Mentor</a></li>
            </ul>
           <NavButton/>
        </nav>
    </div>
  )
}

export default Navbar
