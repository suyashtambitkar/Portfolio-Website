import React from 'react';
import Navigation from "./Navigation";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

const Home = () => {
    return (
        <div className='relative'>

            <Navigation />
            <div className="container mx-auto px-4 md:px-0 pt-24 bg-black">
                <div className="h-[90vh] w-full flex justify-center">
                    <div className="w-full md:w-[1080px] h-[85%] flex justify-between gap-10 "> 
                        <div className="w-full md:w-[60%] h-full flex  items-center ">
                            <div className='flex flex-col gap-6 font-Manrope'>
                                <h2 className='text-2xl md:text-3xl font-semibold'>I Am Suyash Tambitkar</h2>
                                <h2 className='text-4xl md:text-5xl font-bold md:leading-[65px] text-transparent bg-clip-text bg-gradient-to-r from-[#703cdf] to-[#d1c7e3]'>Full Stack Web Developer</h2>
                                <p className='text-base text-[#bbb6d2]'>I break down complex user experinece problems to create integritiy
                                    focussed solutions that connect billions of people</p>
                                <div className='flex flex-col md:flex-row gap-7 md:gap-10 mt-8'>
                                    <button className='border border-[#703cdf] text-[#8658eb] hover:bg-[#8658eb] hover:text-[#e5e2ec] w-[168px] md:w-[28%] text-sm py-2 md:py-3 px-5 md:px-6 rounded-3xl cursor-pointer font-semibold flex text-justify gap-2 transition-all duration-300 delay-75'>Download CV <MdSaveAlt className='text-lg' /></button>
                                    <ul className='flex items-center text-3xl gap-4 '>
                                        <li ><FaTwitter className='border rounded-full p-2 border-[#703cdf] text-[#8658eb] hover:bg-[#8658eb] hover:text-[#e5e2ec] transition-all duration-300 delay-75 cursor-pointer' /></li>
                                        <li ><FaInstagram className='border rounded-full p-2 border-[#703cdf] text-[#8658eb] hover:bg-[#8658eb] hover:text-[#e5e2ec] transition-all duration-300 delay-75 cursor-pointer' /></li>
                                        <li ><RiLinkedinFill className='border rounded-full p-2 border-[#703cdf] text-[#8658eb] hover:bg-[#8658eb] hover:text-[#e5e2ec] transition-all duration-300 delay-75 cursor-pointer' /></li>
                                        <li ><FaGithub className='border rounded-full p-2 border-[#703cdf] text-[#8658eb] hover:bg-[#8658eb] hover:text-[#e5e2ec] transition-all duration-300 delay-75 cursor-pointer' /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-end items-center md:w-[38%] h-full">
                            <img src="/Images/home.img1.jpeg" className='w-[94%] h-[340px] mt-[-10px] mr-[-30px] rounded-md  transform transition-transform duration-300 hover:scale-105' alt="/" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Home;
