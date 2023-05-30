import React from 'react'

const Header = () => {
  return (
    <div className=' w-11/12 mx-auto flex items-center h-hero-container pb-14'>
        <div className="w-hero-text-container px-4 ">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-600 ">Elevate Your Fitness Journey</h1>
          <p className="text-zinc-300 mt-6">Discover a New Level of Health, Strength, and Confidence with Cutting-Edge Equipment, Certified Trainers, and Supportive Community</p>
          <button className='w-40 py-2 mt-6 px-4 rounded-3xl bg-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600 flex justify-center items-center gap-1 lg:gap-2'>Join now</button>
        </div>
    </div>
  )
}

export default Header
