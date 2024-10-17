import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
          controls.start({
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 1.5 },
          });
        }
      }, [controls, inView]);
    return (
        <>
            <div className='md:h-[90vh] w-full flex items-center justify-center'>
                <div className='h-[90%] w-full my-10 md:my-0 md:w-[1000px] flex flex-col text-center items-center ' >
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className='flex gap-3 md:gap-5 mt-2 mb-4 md:mb-8 items-center'>
                        <FaGraduationCap className='text-4xl md:text-5xl  text-[#4b2b90]' />
                        <h2 className='text-3xl md:text-4xl font-bold font-Manrope leading-[65px] text-transparent bg-clip-text bg-gradient-to-r from-[#703cdf] to-[#d1c7e3]'>My Education</h2>
                    </motion.div>

                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className='w-full md:w-[70%] mb-20 text-center  text-[#bbb6d2] px-1 md:px-0'>
                        I have successfully completed my high school education with 10th and 12th grade certifications. Additionally, I hold a Bachelor's degree in Computer Applications (BCA), showcasing my dedication and passion for the field of technology.
                    </motion.div>

                    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className='w-[100%] flex flex-col px-1 md:px-0 gap-8 mx-20' >
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='w-full md:w-[50%] border border-[#120727] hover:border-[#6939d2] rounded-xl py-2 md:py-4 px-5 md:px-7 text-start  bg-[#120727] transition-all  cursor-pointer'>
                                <h3 className='font-bold text-base mb-1 text-[#6939d2]'>Year 2023</h3>
                                <h2 className='font-bold font-Manrope text-lg md:text-xl mb-1'>MERN Stack Development</h2>
                                <p className='text-[#bbb6d2] text-sm md:text-base mb-1'>Udemy</p>
                            </div>
                            <div className='w-full md:w-[50%] border border-[#120727] hover:border-[#6939d2] rounded-xl py-2 md:py-4 px-5 md:px-7 text-start  bg-[#120727] transition-all cursor-pointer'>
                                <h3 className='font-bold text-base mb-1 text-[#6939d2]'>Year 2023</h3>
                                <h2 className='font-bold font-Manrope text-lg md:text-xl mb-1'>MERN Stack Development</h2>
                                <p className='text-[#bbb6d2] text-sm md:text-base mb-1'>Udemy</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='w-full md:w-[50%] border border-[#120727] hover:border-[#6939d2] rounded-xl py-2 md:py-4 px-5 md:px-7 text-start  bg-[#120727] transition-all cursor-pointer'>
                                <h3 className='font-bold text-base mb-1 text-[#6939d2]'>Year 2023</h3>
                                <h2 className='font-bold font-Manrope text-lg md:text-xl mb-1'>MERN Stack Development</h2>
                                <p className='text-[#bbb6d2] text-sm md:text-base mb-1'>Udemy</p>
                            </div>
                            <div className='w-full md:w-[50%] border border-[#120727] hover:border-[#6939d2] rounded-xl py-2 md:py-4 px-5 md:px-7 text-start  bg-[#120727] transition-all cursor-pointer'>
                                <h3 className='font-bold text-base mb-1 text-[#6939d2]'>Year 2023</h3>
                                <h2 className='font-bold font-Manrope text-lg md:text-xl mb-1'>MERN Stack Development</h2>
                                <p className='text-[#bbb6d2] text-sm md:text-base mb-1'>Udemy</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Education