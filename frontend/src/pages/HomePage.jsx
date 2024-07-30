import React from 'react'
import FirstHomepage from '../components/Home Page/FirstHomepage'
import SecondHomepage from '../components/Home Page/SecondHomepage'
import ThirdHomepage from '../components/Home Page/ThirdHomepage'
import FourthHomepage from '../components/Home Page/FourthHomepage'
import FooterHomepage from '../components/Home Page/FooterHomepage'
import { IoIosArrowDropupCircle } from "react-icons/io";
const HomePage = () => {
  return (
    <div>
        <FirstHomepage/>
        <SecondHomepage/>
        <ThirdHomepage/>
        <FourthHomepage/>
        <FooterHomepage/>
        <div className='absolute'>
          <a href='#home'><IoIosArrowDropupCircle className='fixed right-0 bottom-0 top-[90%] text-[70px] text-[#4E9F3D] mr-10'/></a>
        </div>
    </div>
  )
}

export default HomePage