import React from 'react'
import hundredsubs from '../../assets/artworks/100subs.png'

const Hundred = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={hundredsubs} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>100 Subscriber Artwork</h2>
            <p>As I was hitting 100 Subscribers on my old German Gaming YouTube Channel, I drew this Artwork as kind of a little special.</p>
            <h4>1 February 2022</h4>
        </div>
    </div>
  )
}

export default Hundred