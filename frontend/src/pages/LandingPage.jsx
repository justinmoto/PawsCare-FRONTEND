import React from 'react'
import FirstPage from '../components/Landing Page/FirstPage'
import SecondPage from '../components/Landing Page/SecondPage'
import Thirdpage from '../components/Landing Page/Thirdpage'
import Footer from '../components/Landing Page/Footer'
import { IoIosArrowDropupCircle } from "react-icons/io";
const LandingPage = () => {
  return (
    <div>
        <FirstPage/>
        <SecondPage/>
        <Thirdpage/>
        <Footer/>
        <div className='absolute'>
          <a href='#home'><IoIosArrowDropupCircle className='fixed right-0 bottom-0 top-[90%] text-[70px] text-[#4E9F3D] mr-10'/></a>
        </div>
    </div>
  )
}

export default LandingPage