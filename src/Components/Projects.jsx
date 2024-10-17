import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5 },
            });
        }
    }, [controls, inView]);


    return (
        <>
            <div className='md:h-[130vh] w-full pb-20 flex flex-col items-center'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className='h-[20%] md:w-[50%] flex flex-col items-center mb-16 '>
                    <h2 className='text-4xl mb-4 text-center font-bold font-Manrope leading-[50px] md:leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#703cdf] to-[#d1c7e3]'>My Recent Projects</h2>
                    <p className='text-center text-[#bbb6d2]'>My projects showcase innovative design and precise execution, exceeding expectations with user-friendly solutions. Explore how i deliver compelling digital experiences with passion and creativity.</p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className='w-full h-[80%] md:w-[1000px] flex flex-col items-center px-3 gap-12'>

                    <div className='w-full h-[80%]  flex flex-col md:flex-row  justify-center items-center gap-10 md:gap-16'>
                        <div class="h-[200px] md:h-[270px] md:w-[450px] w-[310px] flex items-end bg-cover bg-center cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url('/Images/crypto app.jpeg')` }}>
                            <div className='bg-[#030310] py-2 px-2 md:px-4 opacity-85 w-full flex items-center justify-between'>
                                <h1 className='text-[#eceaf4] text-sm md:text-base'>Crypto Trade Web App</h1>
                                <FaExternalLinkAlt className='text-[#d1cbe9] text-sm md:text-base' />
                            </div>
                        </div>

                        <div class="h-[200px] md:h-[270px] md:w-[450px] w-[310px] flex items-end bg-cover bg-center cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url('/Images/HR Management App.jpeg')` }}>
                            <div className='bg-[#030310] py-2 px-2 md:px-4 opacity-85 w-full flex items-center justify-between'>
                                <h1 className='text-[#eceaf4] text-sm md:text-base'>HR Management Web App</h1>
                                <FaExternalLinkAlt className='text-[#d1cbe9] text-sm md:text-base' />
                            </div>
                        </div>

                    </div>

                    <div className='w-full h-[80%]  flex flex-col md:flex-row  justify-center items-center gap-10 md:gap-16'>
                        <div class="h-[200px] md:h-[270px] md:w-[450px] w-[310px] flex items-end bg-cover bg-center cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url('/Images/Music player.jpeg')` }}>
                            <div className='bg-[#030310] py-2 px-2 md:px-4 opacity-85 w-full flex items-center justify-between'>
                                <h1 className='text-[#eceaf4] text-sm md:text-base'>Music Player Web App</h1>
                                <FaExternalLinkAlt className='text-[#d1cbe9] text-sm md:text-base' />
                            </div>
                        </div>

                        <div class="h-[200px] md:h-[270px] md:w-[450px] w-[310px] flex items-end bg-cover bg-center cursor-pointer transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url('/Images/Task Management.jpeg')` }}>
                            <div className='bg-[#030310] py-2 px-2 md:px-4 opacity-85 w-full flex items-center justify-between'>
                                <h1 className='text-[#eceaf4] text-sm md:text-base'>Task Management Web App</h1>
                                <FaExternalLinkAlt className='text-[#d1cbe9] text-sm md:text-base' />
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Projects