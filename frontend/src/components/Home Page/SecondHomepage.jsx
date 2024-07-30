import React from 'react'
import { IoPaw } from "react-icons/io5";
import { IoMdGlasses } from "react-icons/io";
import { FaCapsules } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";

const SecondHomepage = () => {
  return (
    <div className='bg-[#D8E9A8] h-screen '>
    <div className='font-extrabold text-center py-[4%]'>
        <h1 className='text-[#4E9F3D] text-[30px]'>What We Do</h1>
        <div className='flex justify-center items-center gap-10'>
            <IoPaw className='text-[#4E9F3D] text-[50px]'/>
            <h1 className='text-[40px] text-[#1E5128]'>Main Services</h1>
            <IoPaw className='text-[#4E9F3D] text-[50px]'/>
        </div>
        <div className='grid grid-cols-3 mt-10'>
            <div className='flex items-center justify-center flex-col'>
                <img src="../src/assets/lasertherapy.png" alt="Error" className='h-[35vh] w-[80%] rounded-[30px]'/>
                <h1 className='text-[#4E9F3D] text-[30px] mt-5'>Laser Therapy</h1>
                <IoMdGlasses className='text-[60px] text-[#4E9F3D] mt-5'/>
                <h1 className='px-[24%] mt-7 text-[18px] text-[#4E9F3D] font-medium'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </h1>
            </div>

            <div className='flex items-center justify-center flex-col'>
                <img src="../src/assets/medication.png" alt="Error" className='h-[35vh] w-[80%] rounded-[30px]'/>
                <h1 className='text-[#4E9F3D] text-[30px] mt-5'>Medication</h1>
                <FaCapsules className='text-[60px] text-[#4E9F3D] mt-5'/>
                <h1 className='px-[24%] mt-7 text-[18px] text-[#4E9F3D] font-medium'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </h1>
            </div>

            <div className='flex items-center justify-center flex-col'>
                <img src="../src/assets/Vaccination.png" alt="Error" className='h-[35vh] w-[80%] rounded-[30px]'/>
                <h1 className='text-[#4E9F3D] text-[30px] mt-5'>Vaccination</h1>
                <BiSolidInjection className='text-[60px] text-[#4E9F3D] mt-5'/>
                <h1 className='px-[24%] mt-7 text-[18px] text-[#4E9F3D] font-medium'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default SecondHomepage