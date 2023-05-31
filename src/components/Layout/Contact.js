import React from 'react'
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";


const Contact = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row md:flex-row justify-around items-center text-white p-6 gap-14 lg:gap-0'>
            <div className='flex flex-col gap-6 justify-center order-2 lg:order-1'>
                <div className='flex items-center gap-3'>
                    <GoLocation className='text-2xl lg:text-4xl' />
                    <h1 className='text-lg lg:text-xl text-neutral-400'>Agartala, Tripura, India</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <IoCallOutline className='text-2xl lg:text-4xl' />
                    <h1 className='text-lg lg:text-xl text-neutral-400'>+91 0037418340</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <HiOutlineMail className='text-2xl lg:text-4xl' />
                    <h1 className='text-lg lg:text-xl text-neutral-400'>shibvarghab@gmail.com</h1>
                </div>
            </div>
            <div className='rounded-xl w-80 bg-neutral-900 p-6 order-1 lg:order-2'>
                <div>
                    <h1 className='text-center text-2xl'>Contact us</h1>
                    <div className='mt-8 flex flex-col gap-4'>
                        <input className='rounded-md bg-neutral-700 px-2 py-2 w-full border-none outline-none placeholder:text-white text-black' placeholder='Name'></input>
                        <input className='rounded-md bg-neutral-700 px-2 py-2 w-full border-none outline-none placeholder:text-white text-black' placeholder='Email'></input>
                        <textarea  rows='4' className='rounded-md bg-neutral-700 px-2 py-2 border-none resize-none placeholder:text-white scroll outline-none' placeholder='Enter your message here...'></textarea>
                        <button className='text-white rounded-3xl p-2 w-28 border-2 transition-text duration-150 ease-in-out border-neutral-400/70 hover:bg-white hover:text-black hover:border-white'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
