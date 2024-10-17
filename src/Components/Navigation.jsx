import React, { useState } from 'react';
import { IoLogoXing } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Navigation = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav className='fixed z-10 top-0 left-0 h-[12%] w-full flex justify-center items-center shadow-2xl shadow-[#1c1628] bg-[#090110]'>
                <div className='h-full w-full md:w-[1180px] px-4 px:mx-0 flex justify-between items-center'>
                    <div className='md:w-[40%] flex items-center gap-4'>
                        <IoLogoXing className='text-[50px] text-white' />
                        <h1 className='hidden md:flex font-semibold text-sm'>suyashtambitkar9@gmail.com</h1>
                    </div>
                    <div className='hidden md:flex justify-end w-[45%] '>
                        <ul className='flex  gap-8 font-semibold text-sm '>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Resume</li>
                            <li className='cursor-pointer'>Skills</li>
                            <li className='cursor-pointer'>Education</li>
                            <li className='cursor-pointer'>Projects</li>
                        </ul>
                    </div>
                    <div className='md:w-[15%] flex justify-end'>
                        <button className='px-7 py-2 border-none rounded-3xl font-semibold text-sm bg-gradient-to-r from-[#703cdf] to-[#2c0c71] transition-all duration-300 delay-500 hover:bg-gradient-to-r hover:from-[#2c0c71] hover:to-[#703cdf]'>Hire me!</button>
                    </div>



                    <div className='md:hidden' onClick={() => setShow(!show)}>
                        {
                            show ? (<RxCross2 className='text-3xl' />) : (<RiMenu3Fill className='text-3xl' />)
                        }
                    </div>
                </div>
            </nav>
            <div className={show ? 'fixed h-full w-full left-0 top-[12%]  bg-[#160a21] ease-in duration-300' : 'absolute h-full w-full left-[-100%] top-[12%]  bg-[#160a21] ease-in duration-300'}>
                <ul className=' flex flex-col items-center gap-5 mt-8 '>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Resume</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Education</li>
                    <li className='cursor-pointer'>Projects</li>
                </ul>
            </div>
        </>
    )
}

export default Navigation