import React from 'react'
import { AiOutlineRight  } from "react-icons/ai";

export default function ProDuct3() {
  return (
    <div className='mt-4'>
    <div className='flex p-3  bg-white-200'>
    <div className='w-1/4  m-2 flex flex-col cursor-pointer '><img className='w-full h-3/4 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDselffn-Q96do20J_kyqn0n0vjiN2CUt-A&usqp=CAU'/>
    <p className='bg-slate-200 flex justify-between w-full p-1  hover:bg-slate-300 cursor-pointer font-semibold'>Upto 40% Off <AiOutlineRight className=' hover:bg-slate-300 text-blue-700 mt-1' /></p></div>
      <div className='w-1/4 m-2 flex flex-col cursor-pointer'><img className='w-full h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeq-Y3JGM1CQl5jmU7M6br5Yxetv1jt5wCw&usqp=CAU'/>
      <p className='bg-slate-200 flex justify-between w-full p-1  hover:bg-slate-300 cursor-pointer font-semibold'>Starting From 13,999 <AiOutlineRight className= 'hover:bg-slate-300 text-blue-700 mt-1' /></p></div>
      <div className='w-1/4 m-2 flex flex-col cursor-pointer'><img className='w-full h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiH1AEDpnS0wl4Y3Epq0vsxFR7li1NGAxEkg&usqp=CAU'/>
      <p className='bg-slate-200 flex justify-between w-full p-1  hover:bg-slate-300 cursor-pointer font-semibold'>Under 1,999 <AiOutlineRight className=' hover:bg-slate-300 text-blue-700 mt-1' /></p></div>
      <div className='w-1/4 m-2 flex flex-col cursor-pointer'><img className='w-full h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXCqvX0SyYD_UN5D4KImHxUmMmuIRHowhcw&usqp=CAU'/>
      <p className='bg-slate-200 flex justify-between w-full p-1  hover:bg-slate-300 cursor-pointer font-semibold'>Starting from 8,999 <AiOutlineRight className=' hover:bg-slate-300 text-blue-700 mt-1' /></p></div>
    </div>
    <div className='flex p-4 bg-orange-300'> 
      <div className='w-1/3 m-2'><img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBq81Cd30ZA75bPUkOpwtQ9si5mcPN51bYg&usqp=CAU'/></div>
      <div className='w-1/3 m-2'><img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCI7D-xOT4DNMpRHbJbhtRRou_0l59Ly3hA&usqp=CAU'/></div>
      <div className='w-1/3 m-2'><img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD34pHckD4YXVPb7SVQ9PDZomusNtVDRORJ4kRRTItkDowi_BQMVs0--AbwOq6LmiD1As&usqp=CAU'/></div>
    </div>
    </div>
  )
}
