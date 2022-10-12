import React from 'react'
import dragon from '../../assets/artworks/dragon.png'

const Dragon = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={dragon} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Mighty Dragon</h2>
            <p>I drew this on another drive to vacation in the Swiss Alps.</p>
            <h4>19 February 2022</h4>
        </div>
    </div>
  )
}

export default Dragon