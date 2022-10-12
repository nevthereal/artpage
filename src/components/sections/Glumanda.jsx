import React from 'react'
import glumanda from '../../assets/artworks/glumanda.png'

const Glumanda = () => {
  return (
    <div className='md:flex md:gap-12 md:my-4'>
        <img src={glumanda} alt="easter island" className=' md:w-96 rounded-xl shadow-2xl' />
        <div className='md:my-auto my-4 md:w-2/5'>
            <h2>Lonely Glumanda in the Woods</h2>
            <p>When I was watching the "Pokémon" movie, there was a scene, where this little Glumanda, left back by his former Pokémon Trainer was sitting in the forest on a rock while it was raining.</p>
            <h4>18 February 2022</h4>
        </div>
    </div>
  )
}

export default Glumanda