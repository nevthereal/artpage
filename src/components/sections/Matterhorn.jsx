import React from 'react'
import matterhorn from '../../assets/artworks/matterhorn.png'

const Matterhorn = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={matterhorn} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Matterhorn Artwork</h2>
            <p>My second Artwork using this certain art style. I was hiking in the Canton of Wallis in Switzerland, and got obsessed with this beatiful Mountain.</p>
            <h4>25 November 2021</h4>
        </div>
    </div>
  )
}

export default Matterhorn