import React from 'react'
import { IoPaw } from "react-icons/io5";
const FourthHomepage = () => {
  return (
    <div className='h-[150vh] bg-[#D8E9A8] pt-[1%]'>
        <div className='flex items-center justify-center gap-7 py-10'>
            <IoPaw className='text-[#4E9F3D] text-[55px]'/>
                <h1 className='text-[50px] text-[#1E5128] font-extrabold'>Meet Our Veterinarians</h1>
            <IoPaw className='text-[#4E9F3D] text-[55px]'/>
        </div>
        <h1 className='text-center text-[#4E9F3D] text-[20px] px-10 tracking-wider'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h1>
        <h1 className='text-center text-[#4E9F3D] text-[20px] px-10 tracking-wider'>Ipsum has been the industry's standard dummy text ever since the 1500s.</h1>

        <div className='grid grid-cols-2 place-items-center mt-[3%]'>
            <div className='grid place-items-center'>
                <div className='rounded-full overflow-hidden w-[361px] h-[379px] bg-[#1E5128] shadow-xl'>
                    <img src="../src/assets/doctor.png" alt="Doctor" className='w-full h-full object-cover'/>
                </div>
                <div className='text-center mt-5'>
                    <h1 className='text-[25px] font-extrabold text-[#1E5128]'>Dr. Kwak Suk Nor</h1>
                    <h1 className='text-[20px] text-[#4E9F3D] font-bold'>Laser Therapy Specialist</h1>
                    <h1 className='px-[30%] mt-5 text-[#4E9F3D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h1>
                </div>
            </div>


            <div className='grid place-items-center'>
                <div className='rounded-full overflow-hidden w-[361px] h-[379px] bg-[#1E5128] shadow-xl'>
                    <img src="../src/assets/doctor.png" alt="Doctor" className='w-full h-full object-cover'/>
                </div>

                <div className='text-center mt-5'>
                    <h1 className='text-[25px] font-extrabold text-[#1E5128]'>Dr. Kwak Suk Nor</h1>
                    <h1 className='text-[20px] text-[#4E9F3D] font-bold'>Laser Therapy Specialist</h1>
                    <h1 className='px-[30%] mt-5 text-[#4E9F3D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h1>
                </div>
            </div>
        </div>

        <div className='grid place-items-center mt-[-5%]'>
                <div className='rounded-full overflow-hidden w-[361px] h-[379px] bg-[#1E5128] shadow-xl'>
                    <img src="../src/assets/doctor.png" alt="Doctor" className='w-full h-full object-cover'/>
                </div>

                <div className='text-center mt-5'>
                    <h1 className='text-[25px] font-extrabold text-[#1E5128]'>Dr. Kwak Suk Nor</h1>
                    <h1 className='text-[20px] text-[#4E9F3D] font-bold'>Laser Therapy Specialist</h1>
                    <h1 className='px-[30%] mt-5 text-[#4E9F3D]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h1>
                </div>
            </div>

    </div>
  )
}

export default FourthHomepage