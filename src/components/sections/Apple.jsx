import React from 'react'
import apple_wp from '../../assets/artworks/apple_wallpaper.png'

const Apple = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={apple_wp} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Apple Logo Wallpaper</h2>
            <p>I had this idea of creating a little iPhone Wallpaper with an Apple Logo in the middle. It was very fun to do!</p>
            <h4>19 May 2022</h4>
        </div>
    </div>
  )
}

export default Apple