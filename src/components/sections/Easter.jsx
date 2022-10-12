import React from 'react'
import easter_isl from '../../assets/artworks/easter_islands.png'

const Easter = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={easter_isl} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Easter Islands Statue</h2>
            <p>This is my latest artwork and I drew it on a drive to vacation in Germany. It was very fun to do all the shadowing and lighting.</p>
            <h4>9 October 2022</h4>
        </div>
    </div>
  )
}

export default Easter