import React from 'react';

const Asteroid = ({ top, left, scale }) => {
  return (
    <img
      src="/greyasteriod.png"
      alt="asteroid"
      className="absolute object-cover"
      style={{ top, left, transform: `scale(${scale})`, width: '100px', height: '100px' }}
    />
  );
};

const RAsteroid = ({ top, left, scale }) => {
  return (
    <img
      src="/redasteriod.png"
      alt="asteroid"
      className="absolute object-cover"
      style={{ top, left, transform: `scale(${scale})`, width: '100px', height: '100px' }}
    />
  );
};

const Blueplanet = ({ scale, x, y }) => {
  return (
    <div
      className="relative mx-auto mt-20"
      style={{ right: `${x}%`, top: `${y}%`, width: `${scale}%` }}
    >
      <img src="/planetblye.png" alt="blue planet" className="relative" />
      <div className="absolute top-0 left-0 w-full h-full">
        <Asteroid top="10%" left="20%" scale="0.25" />
        <Asteroid top="30%" left="70%" scale="0.25" />
        <Asteroid top="70%" left="50%" scale="0.25" />
        <Asteroid top="80%" left="10%" scale="0.25" />
        <RAsteroid top="50%" left="10%" scale="0.15" />
        <RAsteroid top="70%" left="90%" scale="0.15" />
        <RAsteroid top="5%" left="5%" scale="0.15" />
      </div>
    </div>
  );
};

const Yellowplanet = ({ scale, x, y }) => {
  return (
    <div
      className="relative mx-auto mt-20"
      style={{ right: `${x}%`, top: `${y}%`, width: `${scale}%` }}
    >
      <img src="/planetyellow.png" alt="yellow planet" className="relative" />
      <div className="absolute top-0 left-0 w-full h-full">
        <Asteroid top="10%" left="20%" scale="0.25" />
        <Asteroid top="30%" left="70%" scale="0.25" />
        <Asteroid top="20%" left="20%" scale="0.25" />
        <Asteroid top="1%" left="80%" scale="0.25" />
        <Asteroid top="60%" left="-2%" scale="0.25" />
        <Asteroid top="20%" left="50%" scale="0.25" />
        <Asteroid top="70%" left="50%" scale="0.25" />
        <Asteroid top="80%" left="10%" scale="0.25" />
        <RAsteroid top="50%" left="10%" scale="0.15" />
        <RAsteroid top="70%" left="90%" scale="0.15" />
        <RAsteroid top="5%" left="5%" scale="0.15" />
      </div>
    </div>
  );
};

const Redplanet = ({ scale, x, y }) => {
  return (
    <div
      className="relative mx-auto mt-20"
      style={{ right: `${x}%`, top: `${y}%`, width: `${scale}%` }}
    >
      <img src="/planetpurple.png" alt="red planet" className="relative" />
      <div className="absolute top-0 left-0 w-full h-full">
        <Asteroid top="10%" left="20%" scale="0.25" />
        <Asteroid top="30%" left="70%" scale="0.25" />
        <Asteroid top="70%" left="50%" scale="0.25" />
        <Asteroid top="80%" left="10%" scale="0.25" />
        <RAsteroid top="50%" left="10%" scale="0.15" />
        <RAsteroid top="70%" left="90%" scale="0.15" />
        <RAsteroid top="5%" left="5%" scale="0.15" />
      </div>
    </div>
  );
};

const Event_page = () => {
  return (
    <div className="h-[350vh] bg-black w-full relative overflow-hidden">
      <div className=" bg-red-50">
        <img
          src="/galaxies.png"
          alt="galaxy background"
          className=" z-20 absolute right-0 top-0 left-0 w-[450%] scale-[2] h-[100vh] object-cover opacity-10"
        />
      </div>
      <Yellowplanet scale={40} x={30} y={0} />
      <Redplanet scale={40} x={0} y={0} />
      <Blueplanet scale={30} x={-20} y={0} />
     
      <div className="absolute inset-0 bg-pink-400 opacity-10"></div>
    </div>
  );
};

export default Event_page;
