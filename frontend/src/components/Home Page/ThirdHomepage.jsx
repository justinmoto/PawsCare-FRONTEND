import React from 'react'
import { IoPaw } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
const ThirdHomepage = () => {
  return (
    <div className='grid grid-cols-2 h-screen bg-[#D8E9A8]'>
        <div>
            <div>
                <div className='flex items-center justify-center gap-7 mt-10'>
                    <IoPaw className='text-[#4E9F3D] text-[55px]'/>
                        <h1 className='text-[55px] text-[#1E5128] font-extrabold'>Book Appointments</h1>
                    <IoPaw className='text-[#4E9F3D] text-[55px]'/>
                </div>
                <h1 className='text-center text-[25px] text-[#4E9F3D] font-bold'>Please fill all the necessary fields</h1>
            </div>

            <div className='flex items-center justify-center mt-10'>
                <form className='space-y-6 w-full max-w-lg'>
                    <div className='grid grid-cols-2 place-items-center gap-10'>
                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Pet Name</label>
                            <input type="text" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'/>
                        </div>

                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Owner's Name</label>
                            <input type="text" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center gap-10'>
                    <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Pet Gender</label>
                            <select type="text" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'>
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Type of Service</label>
                            <select type="text" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'>
                                <option>Select Service</option>
                                <option>Consultation</option>
                                <option>Laser Therapy</option>
                                <option>Medication</option>
                                <option>Vaccination</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center gap-10'>
                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Contact Number</label>
                            <input type="number" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'/>
                        </div>

                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Breed</label>
                            <select type="text" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'>
                                <option>Select Breed</option>
                                <option>Golden Retriever</option>
                                <option>Corgi</option>
                                <option>Bulldog</option>
                                <option>Labrador</option>
                                <option>Aspin</option>
                                <option>Mixed Breed</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 place-items-center gap-10'>
                        <div className='w-full'>    
                            <label className='text-[20px] text-[#1E5128] font-bold'>Date</label>
                            <input type="date" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'/>
                        </div>

                        <div className='w-full'>
                            <label className='text-[20px] text-[#1E5128] font-bold'>Time</label>
                            <input type="time" className='block p-3 rounded-[10px] border-2 border-[#1E5128] w-full'/>
                        </div>
                    </div>

                    <div className='w-full'>
                        <label className='text-[20px] text-[#1E5128] font-bold'>Ailment (Be Specific)</label>
                        <textarea className='block p-3 h-[13vh] rounded-[10px] border-2 border-[#1E5128] w-full'></textarea>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button type='submit' className='p-2 bg-[#1E5128] px-[20%] text-[25px] text-[#D8E9A8] font-bold rounded-[15px]'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

        <div className='bg-[#1E5128] rounded-l-[20px]'>
            <h1 className='text-center text-[50px] text-white font-extrabold mt-10'>Hi! Justin Mark Agustin</h1>
            <div className='flex items-center justify-center mt-10'>
                <img src="../src/assets/catbook.png" alt="" className='h-[15vh]'/>
            </div>
            <h1 className='text-center text-[35px] text-white font-bold mt-10'>Before Booking Reminders:</h1>

            <div className='flex justify-center mt-7'>
                <div className='space-y-6'>
                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-normal text-white'>Ensure your pet is available on the selected date and time.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Check for any potential scheduling conflicts.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Cancellations within 24 hours may incur a fee.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Consider travel time to the clinic.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Reschedule at least 48 hours in advance if needed.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Have your pet’s medical records ready.</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <IoPaw className='text-[35px] text-[#4E9F3D]'/>
                        <h1 className='text-[20px] font-medium text-white'>Double-check your contact details.</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdHomepage