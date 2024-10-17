import React from 'react';
import { IoLogoXing } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaHome } from "react-icons/fa";


const Footer = () => {
   
    return (
        <>
            <div className='h-[65vh] md:h-[35vh] w-full mt-16 flex items-center justify-center bg-[#120727]'>
                <div className='w-full md:w-[1150px] h-[70%] flex flex-col justify-center gap-8 md:gap-14  '>

                    <div className='w-full flex justify-center'>
                        <IoLogoXing className='text-[50px] text-white' />
                    </div>

                    <div className='w-full flex flex-col md:flex-row gap-8 pl-[5%] justify-between'>
                        <div className='flex gap-4'>
                            <div className='mt-2'><IoMail className='text-3xl md:text-4xl  rounded-full p-2  bg-gradient-to-r from-[#703cdf] to-[#2c0c71] cursor-pointer' /></div>
                            <div className='font-semibold'>
                                <p className='text-sm mb-1 text-[#7f65e9]'>Email</p>
                                <p className='text-sm md:text-base text-[#bbb6d2]'>suyashtambitkar9@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='mt-2'><IoIosCall className='text-3xl md:text-4xl  rounded-full p-2  bg-gradient-to-r from-[#703cdf] to-[#2c0c71] cursor-pointer' /></div>
                            <div className='font-semibold'>
                                <p className='text-sm mb-1 text-[#7f65e9]'>Phone no.</p>
                                <p className='text-sm md:text-base text-[#bbb6d2]'>+91 8261088517</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='mt-2'><FaHome className='text-3xl md:text-4xl  rounded-full p-2  bg-gradient-to-r from-[#703cdf] to-[#2c0c71] cursor-pointer' /></div>
                            <div className='font-semibold'>
                                <p className='text-sm mb-1 text-[#7f65e9]'>Address</p>
                                <p className='text-sm md:text-base text-[#bbb6d2]'> Shripad Heights Rahaveli <br /> Dhayari, Pune 411041</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer