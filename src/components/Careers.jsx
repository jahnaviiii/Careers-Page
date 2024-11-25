import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

function Careers() {
    const careers = useLoaderData()


  return (
    <div className="careers">
        {careers.map((career) => (
            <Link to={`/careers/${career.id}`} key={career.id}>
                <p>{career.title}</p>
                <p>{career.location}</p>
            </Link>
        ))}
    </div>
  )
}

export default Careers