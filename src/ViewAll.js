import React from 'react'
// import { AiFillNotification } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

export default function ViewAll() {
  return (
    <div className='w-1/4 h-auto mt-5 mr-7 flex flex-col  items-center bg-orange-400'>
        <h4 className='p-3 font-serif font-bold text-3xl'>Top Offers</h4>
        <button className=' rounded-3xl flex  bg-blue-500 p-4 m-5'>View all <AiFillCaretRight
        className='mt-1 ml-2 text-teal-50' /></button>
        {/* <p className=''><AiFillNotification className='animate-pulse h-12 w-10'/></p> */}
      </div>
      
    
  )
}
