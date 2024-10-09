"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Asteroid = ({ top, left, scale }) => {
  return (
    <motion.img
      src="/greyasteriod.png"
      alt="asteroid"
      className="absolute object-cover"
      style={{ top, left, transform: `scale(${scale})`, width: '10vw', height: '10vw' }}
    />
  );
};

const RAsteroid = ({ top, left, scale }) => {
  return (
    <motion.img
      src="/redasteriod.png"
      alt="asteroid"
      className="absolute object-cover"
      style={{ top, left, transform: `scale(${scale})`, width: '10vw', height: '10vw' }} 
    />
  );
};

const Planet = ({ scale, imageSrc, position, controls }) => {
  return (
    <motion.div
      className="relative mx-auto mt-20"
      style={{ top: `${position.y}%`, right: `${position.x}%`, width: `${scale}vw` }} 
      animate={controls}
      initial={{ opacity: 0 }} 
      transition={{ duration: 1 }} 
    >
      <img src={imageSrc} alt="planet" className="relative w-full h-auto" /> 
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Static Asteroids */}
        <Asteroid top="10%" left="20%" scale="0.25" />
        <Asteroid top="30%" left="70%" scale="0.25" />
        <Asteroid top="70%" left="50%" scale="0.25" />
        <Asteroid top="80%" left="10%" scale="0.25" />
        <RAsteroid top="50%" left="10%" scale="0.15" />
        <RAsteroid top="70%" left="90%" scale="0.15" />
        <RAsteroid top="5%" left="5%" scale="0.15" />
      </div>
    </motion.div>
  );
};

const Event_page = () => {
  const yellowControls = useAnimation();
  const purpleControls = useAnimation();
  const blueControls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 400) {
      yellowControls.start({ opacity: 1, x: 0, y: 0 });
      purpleControls.start({ opacity: 0, x: -100, y: 0 });
      blueControls.start({ opacity: 1, x: 0, y: 0 }); 
    } else if (scrollPosition < 800) {
      yellowControls.start({ opacity: 0, x: -100, y: -100 });
      purpleControls.start({ opacity: 1, x: 0, y: 0 });
      blueControls.start({ opacity: 1, x: 0, y: 0 }); 
    } else if (scrollPosition < 1200) {
      yellowControls.start({ opacity: 0, x: -100, y: -100 });
      purpleControls.start({ opacity: 0, x: -100, y: -100 });
      blueControls.start({ opacity: 0, x: 0, y: 0 }); 
    } else {
      yellowControls.start({ opacity: 0, x: -100, y: -100 });
      purpleControls.start({ opacity: 0, x: -100, y: -100 });
      blueControls.start({ opacity: 1, x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full relative overflow-hidden">
      <div className="bg-red-50">
        <img
          src="/galaxies.png"
          alt="galaxy background"
          className="z-20 absolute right-0 top-0 left-0 w-[450%] scale-[2] h-[100vh] object-cover opacity-10"
        />
      </div>

     
      <Planet 
        scale={40} 
        imageSrc="/planetyellow.png" 
        position={{ x: 30, y: 0 }} 
        controls={yellowControls} 
      />
    
      
      <Planet 
        scale={40} 
        imageSrc="/planetpurple.png" 
        position={{ x: 0, y: 0 }} 
        controls={purpleControls} 
      />

     
      <Planet 
        scale={40} 
        imageSrc="/planetblue.png" 
        position={{ x: -20, y: 0 }} 
        controls={blueControls} 
      />
      
      <div className="absolute inset-0 bg-pink-400 opacity-10"></div>
    </div>
  );
};

export default Event_page;
