import React from 'react'
import { BsCartFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className='fixed w-full h-12 top-0 mb-11'>
      <nav className='bg-blue-500 flex flex-row justify-between h-12 z-10 w-full mb-6'>
        <div className='flex ml-2 px-9 w-1/3'>
          <div  className='mr-2 ml-7 w-1/3 '><img className='w-13 h-6 mt-1 ' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'  />
            <p className='text-sm italic'>Explore <span className='text-yellow-400'>Plus</span></p>
          </div>
          <input className="  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mt-1 mb-1 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </div>
        <ul className='flex px-6 space-x-16 bg-blue-500 justify-end py-3 mr-6'>
          <li className='bg-white text-blue-900 px-7  font-bold cursor-not-allowed'>Login</li>
          <li className='text-white font-bold cursor-pointer'>Become a Seller</li>
          <li className='text-white font-bold'>More</li>
          <li className='flex text-white font-bold cursor-pointer'><BsCartFill className='mt-1 mr-1 text-white' />Cart</li>
        </ul>
      </nav>
      
    </div>
  )
}
