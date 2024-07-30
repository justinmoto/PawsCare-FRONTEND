import React from 'react'
import { FaLongArrowAltLeft,FaUserCircle  } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
const ProfilePage = () => {
  return (
    <div className='bg-[#D8E9A8] h-screen'>
        <div className=''>
            <div className='p-10 flex'>
                <div className='flex items-center bg-[#1E5128] p-2 px-5 rounded-[15px] gap-2'>
                    <FaLongArrowAltLeft className='text-[30px] text-[#4E9F3D]'/>
                    <h1 className='text-[20px] font-bold text-white'>Back</h1>
                </div>
            </div>
        </div>

        <div className='grid grid-row-2 place-items-center'>
            <div className='bg-[#4E9F3D] w-[85%] h-[15vh] rounded-t-[30px]'>
                <div className='relative w-full h-full'>
                    <FaUserCircle className='absolute bottom-[-40px] left-10 text-white text-[100px]'/>
                    <div className='h-full flex justify-center items-center'>
                        <LuImagePlus className='text-white text-[50px]'/>
                    </div>
                </div>
            </div>

            <div className='bg-[#1E5128] w-[85%] h-[20vh] rounded-b-[30px]'>
                <div className='flex justify-end gap-5 mt-5 px-8 w-full'>
                    <div className='flex items-center gap-2 text-[#1E5128] px-4 p-1 bg-white rounded-[10px]'>
                        <IoEyeSharp className='text-[25px]'/>
                        <h1 className='font-bold'>View</h1>
                    </div>

                    <div className='flex items-center gap-2 text-[#1E5128] px-4 p-1 bg-white rounded-[10px]'>
                        <MdModeEdit className='text-[25px]'/>
                        <h1 className='font-bold'>Edit</h1>
                    </div>
                </div>

                <h1 className='ml-10 mt-1 text-[25px] font-bold text-white'>Justin Mark Agustin</h1>
                <h1 className='ml-10 mt-2  text-[20px] w-[70%] text-white'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </h1>
            </div>
        </div>

        <div className="flex items-center justify-center mt-10">
            <div className='bg-[#1E5128] w-[85%] h-[45vh] rounded-[30px]'>
                <div className=''>
                   <h1 className='p-7 text-[25px] font-extrabold text-white'>Appointment History</h1>
                   <div className='overflow-x-auto flex items-center justify-center'>
                   <table className='w-[95%]'>
                            <thead className=''>
                                <tr className='text-left text-[20px] text-white '>
                                    <th className='px-4 py-2'>Pets Name</th>
                                    <th className='px-4 py-2'>Pets Gender</th>
                                    <th className='px-4 py-2'>Type of Service</th>
                                    <th className='px-4 py-2'>Breed</th>
                                    <th className='px-4 py-2'>Date & Time</th>
                                    <th className='px-4 py-2'>Status</th>
                                </tr>
                            </thead>
                            
                            <tbody className=''>
                                <tr className='text-[18px] font-bold text-white border-t-2 bg-[#4E9F3D]'>     
                                    <td className='px-4 py-2 '>Larry</td>
                                    <td className='px-4 py-2'>Male</td>
                                    <td className='px-4 py-2'>Laser Therapy</td>
                                    <td className='px-4 py-2'>Golden Retriever</td>
                                    <td className='px-4 py-2'>01/01/2024 at 10:00AM</td>
                                    <td className='px-4 py-2'>Pending</td>
                                    <td className='text-[30px] px-4 py-2 flex items-center justify-center'><BsThreeDots/></td>
                                </tr>
                            </tbody>     
                    </table>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage