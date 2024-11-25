import React from 'react'
import { NavLink } from 'react-router-dom'

function Acknowledgement() {
  return (
        
        <div className="ack">
        <h3>Thank you for your submission. We have received your query/feedback and will get back to you as soon as possible.</h3>
        <br />
        <br />
        <br />
        
            <NavLink to='/'>Return to home</NavLink>
          
        
        </div>
    
  )
}

export default Acknowledgement