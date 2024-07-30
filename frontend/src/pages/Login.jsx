import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('')

    const handleLogin = (event) => {
        event.preventDefault()
        if(username === 'client' && password === 'client'){
            navigate('/homepage')
        }else if(username === 'admin' && password === 'admin'){
            navigate('/admin')
        }else{
            alert('Wrong Credentials')
        }
    }
  return (
    <div className='bg-[#D8E9A8] h-screen'>
        <div className='flex justify-center items-center h-full'>
            <div className='grid grid-cols-2 border-[0.1px] border-white w-[60%] h-[80vh] shadow-xl rounded-[30px]'>

                <div className='bg-[#1E5128] rounded-l-[30px]'>
                    <h1 className='text-white font-extrabold text-center text-[50px] mt-20'>Paws Care</h1>
                    <div className='flex items-center justify-center mt-10'>
                        <img src="../src/assets/img1.png" alt="" className='w-[30%]'/>
                    </div>
                    <h1 className='text-white font-extrabold text-center text-[40px] tracking-wide'>Welcome Back!</h1>
                    <h1 className='text-center text-[25px] text-white font-bold px-10 mt-10'>The leading clinic in Bulacan, top specialists, modern technology, proven medicines.</h1>
                </div>

                <div>
                    <h1 className='text-[#1E5128] font-extrabold text-center text-[50px] mt-20'>Login</h1>
                    <h1 className='text-[#1E5128] font-extrabold text-center text-[25px]'>Please log in your credential</h1>
                    <div className=' mt-10'>
                        <form className='' onSubmit={handleLogin}>
                            <div className='grid place-content-center w-[60%]'>
                                <label className='font-extrabold text-[#1E5128] text-[20px]'>Username</label>
                                <input type="text" 
                                onChange={e => setUsername(e.target.value)}
                                className='block p-4 w-[200%] border-2 border-[#1E5128] rounded-[10px]'/>
                            </div>

                            <div className='grid place-content-center w-[60%] mt-10'>
                                <label className='font-extrabold text-[#1E5128] text-[20px]'>Password</label>
                                <input type="text" 
                                onChange={e => setPassword(e.target.value)}
                                className='block p-4 w-[200%] border-2 border-[#1E5128] rounded-[10px]'/>
                            </div>
                            <h1 className='text-right text-[#1E5128] mr-10 mt-2 underline font-bold'>Forgot Password?</h1>

                            <div className='flex items-center justify-center mt-10'>
                                <button type='submit' className='text-[#D8E9A8] text-[23px] font-bold bg-[#1E5128] p-3 w-[55%] rounded-[10px]'>ENTER</button>
                            </div>
                            <h1 className='font-bold text-[#1E5128] mt-4 text-center'>Don’t have account yet? <span className='underline'>SIGN UP HERE</span></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login