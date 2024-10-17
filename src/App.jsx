import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    // Blink effect
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1500); // Change visibility every second

    // Move up effect after 3 seconds
    const moveTimeout = setTimeout(() => {
      setMoveUp(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(moveTimeout);
    };
  }, []);

  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  return (
    <>
      <div className='relative'>
        <div
          className={`fixed z-20 h-screen w-full flex items-center justify-center left-0 bg-[#030207] transition-all duration-1000 ${moveUp ? 'top-[-120%]' : 'top-0'}`}
        >
          <div className='inline-block text-lg pl-6 md:pl-2 font-Manrope'>
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`mr-6 md:mr-10 text-sm md:text-base transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Home />
          <Projects /> 
          <Skills />
          <Education />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
