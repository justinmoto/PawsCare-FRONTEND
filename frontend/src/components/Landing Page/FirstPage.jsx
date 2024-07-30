import React from 'react'
import NavBar from './NavBar'
import { IoPaw } from "react-icons/io5";
const FirstPage = () => {
  return (
    <div id='home' className='bg-[#D8E9A8] h-screen'>
        <NavBar/>
        <div className='grid grid-cols-2'>
            <div>
                <div className='p-10 text-[90px] font-extrabold text-[#1E5128]'>
                    <h1>Veterinary</h1>
                    <h1>Clinic in Bulacan</h1>
                </div>
                
                <div className='p-10 text-[#4E9F3D] text-[30px] font-bold mt-[-7%]'>
                    <h1>The leading clinic in Bulacan, top</h1>
                    <h1>specialists, modern technology,</h1>
                    <h1>proven medicines.</h1>
                </div>

                <div className='p-10 font-bold mt-[-5%]'>
                    <button className='p-2 px-[10%] text-[30px] bg-[#4E9F3D] text-[#D8E9A8] rounded-[30px]'>SIGN UP</button>
                    <h1 className='mt-2 text-[#4E9F3D] tracking-wide'>Read our Booking Policy. <span className='underline text-[#1E5128]'>Click Here</span></h1>
                </div>
            </div>

            <div className='relative flex items-end justify-center w-full'>
                <img src="../src/assets/cat.png" alt="Cat" className='absolute bottom-[-187px] h-[90vh]'/>
                <div>
                    <IoPaw className='absolute left-[10%] top-[110%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute left-0 top-[90%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute left-[10%] top-[75%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute left-[-1%] top-[60%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute left-[5%] top-[36%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute left-[10%] top-[20%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute left-[15%] top-[50%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute left-[19%] top-[30%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute left-[23%] top-[15%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute left-[19%] top-[-4%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute left-[40%] top-[-7%] text-[#1E5128] text-[50px]'/>
                </div>

                <div>
                    <IoPaw className='absolute right-[12%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute right-[3%] top-[90%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute right-[15%] top-[80%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute right-[5%] top-[65%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute right-[17%] top-[50%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute right-[10%] top-[36%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute right-[23%] top-[25%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute right-[0%] top-[20%] text-[#1E5128] text-[50px]'/>
                    <IoPaw className='absolute right-[15%] top-[7%] text-[#4E9F3D] text-[50px]'/>
                    <IoPaw className='absolute right-[40%] top-[1%] text-[#4E9F3D] text-[50px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPage