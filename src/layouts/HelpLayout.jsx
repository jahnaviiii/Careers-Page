import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className="help-layout">
        <h1>Website Help</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis architecto, id iste corporis magnam.</p>
        <nav>
            <NavLink to='faq'>FAQs</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayout