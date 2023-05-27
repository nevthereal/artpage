import React from 'react'

import Apple from './sections/Apple'
import Batman from './sections/Batman'
import Cloak from './sections/Cloak'
import Dragon from './sections/Dragon'
import Easter from './sections/Easter'
import Glumanda from './sections/Glumanda'
import Hundred from './sections/Hundred'
import Machu from './sections/Machu'
import Matterhorn from './sections/Matterhorn'
import Mountains from './sections/Mountains'
import Venom from './sections/Venom'
import Windows from './sections/Windows'
import Woods from './sections/Woods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {
  return (
    <div className=''>
        <div className='mx-8 my-8'>
            <Easter />
            <Machu />
            <Mountains />
            <Apple />
            <Cloak />
            <Dragon />
            <Batman />
            <Glumanda />
            <Hundred />
            <Venom />
            <Matterhorn />
            <Woods />
            <Windows />
        </div>
        <a className='text-gray-600 fixed right-4 bottom-4 text-3xl m-4' href="https://instagram.com/neville_artwork" target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
        <footer className='bg-black p-8 text-center text-white font-bold'>
          <p className='uppercase'>©Copyright <a href="https://nevillebrem.com" className='link'>Neville Brem</a> <br />
          <FontAwesomeIcon icon={faLocationDot} /> Zurich, Switzerland</p>
        </footer>
    </div>
  )
}

export default Gallery