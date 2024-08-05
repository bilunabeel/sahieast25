import React from 'react';
import VideoBg from '../assets/Videobg.mp4';
import LogoHoriWhite from '../assets/logo_hori_white.svg';

const Hero = () => {
  return (
    <section className="bg-opacity-70 bg-black flex h-[100vh] justify-center">


      {/* <div className=" bg-black opacity-75 absolute  w-full h-full" /> */}

      <video
        className="w-full h-full absolute object-cover -z-10"
        src={VideoBg}
        autoPlay
        loop
        muted
      />
      
      <div className=" z-100 absolute padding-x  h-full padding-y flex justify-between max-md:justify-center max-md:text-center items-center max-md:flex-col max-md:items-center max-md:gap-10 max-container ">
        <div className="flex gap-3 w-full h-36 ">
          <img src={LogoHoriWhite} />
        </div>
        <div>
          <p className="font-poppins w-full text-white font-light">
            The Festival of Hope is a beacon of optimism in a world often shrouded in uncertainty. It's a gathering where hearts unite, spirits soar, and the human capacity for resilience is celebrated.
            {' '}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
