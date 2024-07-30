import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const NavBarHomepage = () => {
  return (
    <div className='flex items-center justify-between '>
        <div className='p-10 flex items-center'>
            <img src="../src/assets/logo.png" alt="" className='w-[18%]'/>
            <h1 className='text-[30px] font-extrabold text-[#1E5128]'>Paws Care</h1>
        </div>

        <div className='mr-28'>
            <div className='flex items-center space-x-14 px-8 py-2 font-bold rounded-[50px] bg-white shadow-lg'>
                <ul className='flex space-x-16'>
                    <a href='#aboutus'>About Us</a>
                    <a href='#Services'>Services</a>
                    <a href='#aboutus'>Reviews</a>
                    <a href='#aboutus'>Contacts</a>
                </ul>
                <a href='#BookNow'className='p-2 px-5 rounded-[50px] bg-[#4E9F3D]'>Book Now</a>
            </div>
        </div>

        <div className='flex items-center text-white mr-20 px-5 py-2 rounded-[50px] shadow-xl'>
            <FaUserCircle className='text-[#4E9F3D] text-[40px]'/>
            <IoMdArrowDropdown className='text-[#4E9F3D] text-[40px]'/>
        </div>
    </div>
  )
}

export default NavBarHomepage