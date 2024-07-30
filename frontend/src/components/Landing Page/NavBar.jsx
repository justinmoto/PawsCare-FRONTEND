import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between'>
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

        <div className='text-right font-bold mr-10'>
            <h1>San Jose Del Monte Bulacan</h1>
            <h1>+639999117551</h1>
            <h1>8:00AM - 5:00PM</h1>
        </div>
    </div>
  )
}

export default NavBar