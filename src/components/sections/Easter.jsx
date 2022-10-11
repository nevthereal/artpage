import React from 'react'
import easter_isl from '../../assets/artworks/easter_islands.png'

const Easter = () => {
  return (
    <div className='flex gap-12 my-4'>
        <img src={easter_isl} alt="easter island" className=' w-96 rounded-xl shadow-2xl' />
        <div className='my-auto w-2/5'>
            <h2>Easter Islands Statue</h2>
            <p>This is my latest artwork and I drew it on a drive to vacation in Germany. It was very fun to do all the shadowing and lighting.</p>
        </div>
    </div>
  )
}

export default Easter