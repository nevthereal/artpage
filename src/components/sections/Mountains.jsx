import React from 'react'
import mountains from '../../assets/artworks/wallpaper.png'

const Mountains = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={mountains} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Mountains Wallpaper for Old Portfolio</h2>
            <p>I am using this Wallpaper as the Index Page of my <a href="https://old.nevillebrem.com" className='link'>old Portfolio</a>.</p>
            <h4>29 May 2022</h4>
        </div>
    </div>
  )
}

export default Mountains