import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
        <h2>Page not found.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, iste.</p>
        <NavLink to="/">Go to home</NavLink>
    </div>
  )
}

export default NotFound