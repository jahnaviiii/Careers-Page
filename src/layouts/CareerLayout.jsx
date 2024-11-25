import React from 'react'
import { Outlet } from "react-router-dom"

function CareerLayout() {
  return (
    <div className="career-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatem!</p>
        <Outlet/>
    </div>
  )
}

export default CareerLayout

export const careerLoader = async () =>{
    const res = await fetch('https://careers-data.onrender.com/careers');
    if(!res.ok){
        throw Error('Could not fetch the careers');
    }
    
    return res.json();
}