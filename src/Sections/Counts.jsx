import React from 'react';
import reactLogo from '../assets/react.svg';

const Counts = () => {
  return (
    <section className=" ">
      <div className="flex justify-between items-center ">
        <div className="w-full bg-theme_red flex padding-y padding-x">

          <div className="max-container flex-col flex items-center justify-center">
            <h1 className="font-mono font-bold text-8xl">36</h1>
            <h3 className="font-poppins font-bold text-xl">Competitions</h3>
          </div>
          <div className="max-container flex-col flex items-center justify-center">
            <h1 className="font-mono font-bold text-8xl">36</h1>
            <h3 className="font-poppins font-bold text-xl">Competitions</h3>
          </div>
          <div className="max-container flex-col flex items-center justify-center">
            <h1 className="font-mono font-bold text-8xl">36</h1>
            <h3 className="font-poppins font-bold text-xl">Competitions</h3>
          </div>
        </div>

        <div className="w-full">
          <img src={reactLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Counts;
