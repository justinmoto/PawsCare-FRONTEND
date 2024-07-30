import React from 'react'
import { IoPaw } from "react-icons/io5";
const SecondPage = () => {
  return (
    <div id='aboutus' className='bg-[#D8E9A8] h-screen relative'>
        <div className='py-[4%]'>
            <h1 className='text-center text-[45px] font-extrabold text-[#1E5128]'>What is Paws Care?</h1>
        </div>

        <div className='relative'>
            <IoPaw className='absolute left-[15%] text-[#4E9F3D] text-[50px]'/>
        </div>

        <div className='relative'>
            <IoPaw className='absolute right-[15%] text-[#4E9F3D] text-[50px]'/>
        </div>

        <div className='relative text-[#4E9F3D] font-medium'>
            <h1 className='text-center text-[30px] px-[20%]'>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
            <h1 className='text-center text-[30px] px-[20%]'>industry. Lorem Ipsum has been the industry's standard dummy text ever</h1>
            <h1 className='text-center text-[30px] px-[20%]'>since the 1500s, when an unknown printer took a galley of type and</h1>
            <h1 className='text-center text-[30px] px-[20%]'>scrambled it to make a type specimen book. </h1>
        </div>

        <div className='relative'>
            <IoPaw className='absolute left-[7%] text-[#1E5128] text-[50px]'/>
        </div>

        <div className='relative'>
            <IoPaw className='absolute right-[7%] text-[#1E5128] text-[50px]'/>
        </div>

        <div className='relative mt-16 text-[#4E9F3D] font-medium'>
            <h1 className='text-center text-[30px] px-[20%]'>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
            <h1 className='text-center text-[30px] px-[20%]'>industry. Lorem Ipsum has been the industry's standard dummy text ever</h1>
            <h1 className='text-center text-[30px] px-[20%]'>since the 1500s, when an unknown printer took a galley of type and</h1>
            <h1 className='text-center text-[30px] px-[20%]'>scrambled it to make a type specimen book. </h1>
        </div>


        <div className=' relative flex justify-center items-center gap-10 font-bold mt-14'>
            <IoPaw className='text-[#1E5128] text-[50px]'/>
            <button className='p-2 px-[5%] text-[30px] bg-[#4E9F3D] text-[#D8E9A8] rounded-[30px]'>SIGN UP</button>
            <IoPaw className='text-[#1E5128] text-[50px]'/>
        </div>

        <div className='relative flex justify-center mt-10'>
            <IoPaw className='text-[#4E9F3D] text-[50px]'/>
        </div>

        <div>
            <div className='relative'>
                <img src="../src/assets/catcat.png" alt="" className='absolute top-[-279px] h-[40vh]'/>
                <img src="../src/assets/dogdog.png" alt="" className='absolute top-[-279px] right-0 h-[40vh]'/>
            </div>
        </div>

    </div>
  )
}

export default SecondPage