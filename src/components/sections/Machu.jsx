import React from 'react'
import machu_picchu from '../../assets/artworks/macchu_picchu.png'

const Machu = () => {
  return (
    <div className='flex gap-12 my-4'>
        <div className='my-auto w-2/5'>
            <h2>Mountain Village à Machu Picchu</h2>
            <p>For this Artwork I took deep inspiration from the ancient Machu Picchu Village in Peru. I had very fun with texturing the rocks and painting all those tiny little houses.</p>
        </div>
        <img src={machu_picchu} alt="easter island" className=' w-96 rounded-xl shadow-2xl' />
    </div>
  )
}

export default Machu