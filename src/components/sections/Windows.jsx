import React from 'react'
import windows11 from '../../assets/artworks/windows_11.png'

const Windows = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={windows11} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Windows 11 Remix</h2>
            <p>My very first Artwork ever. Its also my first ever Procreate Project. I was fascinated by the Windows 11 Wallpapers (literally the only good thing about this OS) and I traced it down with Procreate.</p>
            <h4>24 November 2021</h4>
        </div>
    </div>
  )
}

export default Windows