import React from 'react'
import venom from '../../assets/artworks/venom.png'

const Venom = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={venom} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Venom</h2>
            <p>One of my very old creations. Venom is one of my favourite Characters in the Marvel Universe and I had to draw him.</p>
            <h4>2 December 2021</h4>
        </div>
    </div>
  )
}

export default Venom