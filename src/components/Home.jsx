import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-banner text-white'>
        <div className='flex gap-2 flex-col pt-[20%] px-8'>
            <h2>Welcome to</h2>
            <h1>Neville's Art Gallery</h1>
            <p>here I store my favourite artworks!</p>
            <a href="/gallery"><button className='border rounded-xl mr-auto p-2 mt-2'>Dive in!</button></a>
        </div>
    </div>
  )
}

export default Home