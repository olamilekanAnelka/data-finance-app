import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white h-screen flex flex-col justify-center items-center'>
      <p className='text-[#00df9a] font-bold p-1'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold md:py-3'>Grow With Data.</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>fast, flexible financing for</p>
        <Typed 
          className='md:text-3xl sm:text-2xl text-xl font-bold pl-2'
          strings={['BTB', 'BTC', 'SASS']} 
          Typespeed={120} 
          backspeed={140} loop
        />
      </div>
      <p className='md:ml-2 md:text-xl sm:w-80% text-xl font-bold text-gray-500 mt-4 md:mt-0 md:pl-4 pl-2'>
        monitor your data analytics to increase revenue BTB, BTC, & SASS platforms.</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-2 text-black'>Get Started</button>
    </div>
  );
};

export default Hero;
