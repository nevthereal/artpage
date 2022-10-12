import React from 'react'
import woods from '../../assets/artworks/woods.png'

const Woods = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={woods} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Matterhorn Artwork</h2>
            <p>My first Artwork using this certain art style. With a simple but beautiful color theme, it is possible to draw such a beatiful Artwork. Or wallpaper if you want so.</p>
            <h4>24 February 2021</h4>
        </div>
    </div>
  )
}

export default Woods