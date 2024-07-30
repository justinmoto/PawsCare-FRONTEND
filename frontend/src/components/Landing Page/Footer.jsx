import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <div className='h-[27vh] bg-[#4E9F3D] grid grid-cols-4 text-white'>
        <div className='ml-[10%] mt-7'>
            <h1 className='text-[35px] font-extrabold'>Paws Care</h1>
            <h1 className='text-[20px] w-[55%]'>Lorem Ipsum is simply  industry. standard  the 1500s printing and typesetting industry.</h1>
            <div className='text-[30px] flex items-start gap-4 mt-3'>
                <FaFacebook/>
                <RiInstagramFill/>
                <IoLogoWhatsapp/>
            </div>
        </div>

        <div className='ml-[30%] mt-7'>
            <h1 className='text-[35px] font-extrabold'>Address</h1>
            <h1 className='text-[20px]'>+639999117551</h1>
            <h1 className='text-[20px]'>Brgy. Muzon, San Jose</h1>
            <h1 className='text-[20px]'>Del Monte Bulacan</h1>
            <div className='ml-[18%] text-[30px] mt-2'>
                <SiGooglemaps className=''/>
            </div>
        </div>
        
        <div className='ml-[30%] mt-7'>
            <h1 className='text-[35px] font-extrabold'>Links</h1>
            <h1 className='text-[20px] underline'>Home</h1>
            <h1 className='text-[20px] underline'>About Us</h1>
            <h1 className='text-[20px] underline'>Services</h1>
            <h1 className='text-[20px] underline'>Login</h1>
            <h1 className='text-[20px] underline'>Sign Up</h1>
        </div>

        <div className='ml-[5%] mt-7'>
            <h1 className='text-[35px] font-extrabold'>Opening Hours</h1>
            <div className='flex gap-[13%]'>
                <h1>Monday - Friday</h1>
                <h1 className=''>Sunday</h1>
            </div>

            <div className='flex gap-[13%]'>
                <h1>8:00AM - 5:00PM</h1>
                <h1 className=''>Close</h1>
            </div>

            <h1>Saturday</h1>
            <h1>1:00PM - 6:30PM</h1>
        </div>
    </div>
  )
}

export default Footer