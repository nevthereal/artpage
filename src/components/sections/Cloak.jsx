import React from 'react'
import cloak from '../../assets/artworks/cloak.png'

const Cloak = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={cloak} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Mysterious cloaked Sorcerer</h2>
            <p>I've been pretty obsessed with cloaked people and I wanted to draw a new Profile Picture for my <a href="https://instagram.com/neville_artwork" className='link'>Instagram</a> anyway, so I made this!</p>
            <h4>28 April 2022</h4>
        </div>
    </div>
  )
}

export default Cloak