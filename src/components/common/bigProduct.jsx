import React from 'react'
import { FaHeart } from "react-icons/fa";

const BigProduct = () => {
  return (
    <>
      <div className='Product relative w-[24vw] h-[82vh] flex flex-col border-2 border-gray-300 rounded-md shadow-md cursor-pointer'>
        <div className='Product-Image w-[100%] overflow-hidden'>
          <img src='https://www.vastranand.in/cdn/shop/files/1_871d6045-82d0-4209-b464-46ce51a4c7f3.jpg?v=1716447638' className='object-cover h-[100%] w-[100%] rounded-md'/>
          <FaHeart className='absolute text-red-500 opacity-50 top-2 right-2 text-3xl' id='Heart'/>
        </div>
        
        <div className='Details flex flex-col gap-2 text-xl m-2'>
          <p>BLUSH & BLOSSOM - TRAIL KURTA SET</p>
          <p>₹ 2,374</p>
        </div>
      </div>
    </>
  )
}

export default BigProduct;