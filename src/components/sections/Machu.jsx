import React from 'react'
import machu_picchu from '../../assets/artworks/macchu_picchu.png'

const Machu = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={machu_picchu} alt="easter island" className='md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Mountain Village à Machu Picchu</h2>
            <p>For this Artwork I took deep inspiration from the ancient Machu Picchu Village in Peru. I had very fun with texturing the rocks and painting all those tiny little houses.</p>
            <h4>30 July 2022</h4>
        </div>
    </div>
  )
}

export default Machu