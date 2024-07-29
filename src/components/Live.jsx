import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";

const Live = () => {
  return (
    <div className='fixed bg-red-800 text-center text-xl rounded-3xl rounded-bl-none font-poppins flex justify-center items-center gap-2 z-50 text-white p-5 bottom-10 left-10'>
        <FaRegPlayCircle/>
        <p>LIVE</p>
    </div>
  )
}

export default Live