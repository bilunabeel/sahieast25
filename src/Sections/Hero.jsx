import React from 'react';
import VideoBg from '../assets/Videobg.mp4';
import herologo from '../assets/herologo.svg';

const Hero = () => {
  return (
    <section className="bg-opacity-75 bg-black flex h-[100vh] justify-center">


      {/* <div className=" bg-black opacity-75 absolute  w-full h-full" /> */}

      <video
        className="w-full h-full absolute object-cover -z-10"
        src={VideoBg}
        autoPlay
        loop
        muted
      />
      
      <div className="z-100 absolute padding-x h-full padding-y flex justify-between max-md:justify-center max-md:text-center items-center max-md:flex-col max-md:items-center max-md:gap-10 max-container ">
        <div className="flex gap-3 w-full h-64">
          <img src={herologo} className='animate-fade-right' />
        </div>
        <div className="animate-fade-left">
          <p className="font-grotesk w-full text-white font-light " >
          The In-Betweens are the spaces and moments that holds us together, the unseen rope that binds us despite our countless diversities. The soul of the theme is embedded in the style and design of the identity of the festival. Multifont typography - an extension of Typographic Dualism - is used in the title fonts.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
