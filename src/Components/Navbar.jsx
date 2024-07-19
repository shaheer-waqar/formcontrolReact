import React from 'react'
import { FaRegUser } from "react-icons/fa";


function Navbar({registerHandler,formHandler,length}) {
  return (
    <div className='w-full h-[35px] bg-slate-900 flex justify-start px-10 gap-5 items-center uppercase'>
        <div><a href="#" onClick={registerHandler} className='text-white text-sm hover:text-gray-300 hover:underline'>Registration</a></div>
        <div><a href="#" onClick={formHandler} className='text-white text-sm hover:text-gray-300 hover:underline '>users <sup>{length}</sup></a></div>
    </div>
  )
}

export default Navbar