import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
      <div className='md:h-[90vh] w-full flex items-center justify-center bg-[#10091d]'>
        <div className='h-[80%] w-full md:w-[1000px] my-20 md:my-10 flex flex-col text-center items-center gap-9 md:gap-12' >
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='text-4xl font-bold font-Manrope leading-[50px] md:leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#703cdf] to-[#d1c7e3]'>My Skills</motion.div>
          
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
           className='w-[98%] md:w-[60%] text-[#bbb6d2]'>I put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</motion.div>
          
          <motion.ul 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className='flex flex-col md:flex-row items-center gap-7 md:gap-9'>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><FaHtml5 className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#be5728] mb-4 md:mb-7  cursor-pointer'/>HTML </li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><IoLogoCss3 className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#485eed] mb-4 md:mb-7 cursor-pointer'/>CSS</li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><RiJavascriptFill className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#c6b931] mb-4 md:mb-7 cursor-pointer'/>Java Script</li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><FaReact className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#3fc4fd] mb-4 md:mb-7 cursor-pointer'/>React js</li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><FaNodeJs className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#59c631] mb-4 md:mb-7 cursor-pointer'/>Node js</li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><SiExpress className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] mb-4 md:mb-7 cursor-pointer'/>Express js</li>
            <li className='text-[#bbb6d2] transform transition-transform duration-300 hover:scale-105'><SiMongodb className='text-8xl p-3 border rounded-xl border-[#703cdf] bg-[#17063b] text-[#2c8e2f] mb-4 md:mb-7 cursor-pointer'/>Mongo DB</li>
          </motion.ul>
        </div>
      </div>
    </>
  )
}

export default Skills