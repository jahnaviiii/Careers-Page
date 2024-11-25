import React from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'

function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()
    
  return (
    <div>
        <div className="career-details">
            <h3>{career.title}</h3>
            <p>Location: {career.location}</p>
            <p>Salary: {career.salary}</p>
            <div className="details">
                <p>Description: </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam minima quaerat pariatur, repudiandae repellendus, veritatis facilis possimus est rem ab. Aperiam quaerat distinctio aspernatur optio corrupti eveniet placeat fugiat eaque tempora pariatur, facilis, at perspiciatis consequatur ducimus nemo nostrum! Libero, sint. Animi doloribus quisquam porro excepturi veritatis repudiandae ut omnis facilis tempore optio hic, provident consequuntur laborum possimus vitae eligendi inventore sed, nisi, ipsum error corporis et. Incidunt corporis officiis molestiae mollitia aut praesentium!</p>
            </div>
            
        </div>
        <button className='career-button'>
            <Link to='/careers'>Back</Link>
        </button>
    </div>
  )
}

export default CareerDetails

export const careerDetailsLoader = async ({params}) =>{
    const { id } = params
    const res = await fetch(`https://careers-data.onrender.com/careers/${id}`)
    // console.log(res)

    if(!res.ok){
        throw Error('Could not find the career')
    }

    return res.json()
}