import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem? Reprehenderit eaque, totam ullam corporis quasi, dolore laudantium vero molestias, ipsam hic atque numquam quod perspiciatis deserunt pariatur ea natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi dignissimos commodi obcaecati pariatur dolorum culpa, sed optio voluptates nobis, dolorem perferendis suscipit impedit neque et quis, natus repellat amet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem? Reprehenderit eaque, totam ullam corporis quasi, dolore laudantium vero molestias, ipsam hic atque numquam quod perspiciatis deserunt pariatur ea natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi dignissimos commodi obcaecati pariatur dolorum culpa, sed optio voluptates nobis, dolorem perferendis suscipit impedit neque et quis, natus repellat amet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem? Reprehenderit eaque, totam ullam corporis quasi, dolore laudantium vero molestias, ipsam hic atque numquam quod perspiciatis deserunt pariatur ea natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint excepturi dignissimos commodi obcaecati pariatur dolorum culpa, sed optio voluptates nobis, dolorem perferendis suscipit impedit neque et quis, natus repellat amet!</p>
        <button className='explore-careers'>
        <NavLink to='/careers'>Explore Careers</NavLink>
        </button>
    </div>
  )
}

export default Home