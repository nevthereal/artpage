import React from 'react'
import batman from '../../assets/artworks/Batman.png'

const Batman = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={batman} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>"The Batman" Wallpaper</h2>
            <p>To this time, the "The Batman" movie was freshly released and I knew, that I had to draw a dark and mysterious wallpaper for it.</p>
            <h4>18 February 2022</h4>
        </div>
    </div>
  )
}

export default Batman