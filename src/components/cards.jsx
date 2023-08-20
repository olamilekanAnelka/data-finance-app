import React from 'react'
import img from './assets/care_boafgb.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240] mx-auto  md:grid grid-cols-3 gap-12 sm:gap-5 pb-4' >
           <div className='w-full shadow-2xl flex flex-col p-4 rounded-lg hover:scale-110 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img} alt="" />
            <h2 className='text2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-2xl font-bold'>$145</p>
            <div className='text-center font-small'>
                <p className='py-2 border-b mx-8 mt-5 '>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-medium py-2 text-black mx-auto mt-2 '>Start Trial</button>
           </div>

           <div className='w-full shadow-2xl flex flex-col p-4 rounded-lg hover:scale-110 duration-300  mt-2 '>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img} alt="" />
            <h2 className='text2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-2xl font-bold'>$145</p>
            <div className='text-center font-small'>
                <p className='py-2 border-b mx-8 mt-5 '>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-medium py-2 text-black mx-auto mt-2 '>Start Trial</button>
           </div>

           <div className='w-full shadow-2xl mt-5 flex flex-col p-4 rounded-lg hover:scale-110 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img} alt="" />
            <h2 className='text2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-2xl font-bold'>$145</p>
            <div className='text-center font-small'>
                <p className='py-2 border-b mx-8 mt-5 '>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[160px] rounded-md font-medium py-2 text-black mx-auto mt-2 '>Start Trial</button>
           </div>
        </div>
      
    </div>
  )
}

export default Cards
