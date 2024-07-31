import React from 'react'
import { FaUserCircle  } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineManageAccounts, MdManageHistory,  } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import {Link} from "react-router-dom"
const NavbarAdmin = () => {
  return (
    <div className='bg-[#1E5128] w-[20%] h-screen rounded-r-[15px]'>
      <div className='flex flex-col justify-center items-center p-10 space-y-5 text-white'>
        <FaUserCircle className='text-[100px]'/>
        <h1 className='text-[25px] font-bold'>Administrator</h1>
      </div>

      <div className='flex justify-center items-center mt-10 text-[20px] text-white'>
        <div className='flex flex-col space-y-12 font-bold'>
          <Link to='/' className='flex items-center gap-5'><MdOutlineManageAccounts className='text-[30px]'/>Manage Appointment</Link>
          <Link to='/' className='flex items-center gap-5'><MdManageHistory className='text-[30px]'/>Appointment History</Link>
          <Link to='/' className='flex items-center gap-5'><VscFeedback className='text-[30px]'/>Appointment Feedback</Link>
        </div>
      </div>

      <div className='mt-[100%] flex justify-center'>
        <button className='flex items-center justify-center w-[70%] p-2 gap-3 font-bold text-[#1E5128] bg-white rounded-[10px]'><RiLogoutCircleLine className='text-[30px]'/>LOGOUT</button>
      </div>
    </div>
  )
}

export default NavbarAdmin