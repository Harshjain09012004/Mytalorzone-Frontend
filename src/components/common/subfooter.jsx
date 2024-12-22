import React from 'react'
import {Link} from 'react-router-dom';

const Subfooter = () => {
  return (
    <>
    <div className='Subfooter px-[5%] py-[3%] bg-zinc-100 flex flex-col gap-7'>

      <p className=' text-center text-2xl font-semibold'>Explore More</p>

      <div className='Links flex text-sm justify-around'>
        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold text-lg'>Support</p>
          <Link to={""}>Help Centre</Link>
          <Link to={""}>Customer Care</Link>
          <Link to={""}>Community</Link>
        </div>

        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold text-lg'>Initiatives</p>
            <Link to={""}>Child Education</Link>
            <Link to={""}>Local For Vocal</Link>
        </div>

        <div className='flex flex-col gap-3 text-gray-600'>
          <p className='text-zinc-800 font-semibold text-lg'>Products</p>
            <Link to={""}>Clothes</Link>
            <Link to={""}>Accessories</Link>
            <Link to={""}>Wedding</Link>
        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Subfooter;