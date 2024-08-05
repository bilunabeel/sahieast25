import React from 'react';
import CountBar from '../assets/CountBar.png';

const Counts = () => {

  const sectionStyle = {
    backgroundImage: `url(${CountBar})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '12rem',// Adjust height as needed
  };

  return (
    <section style={sectionStyle} className="">
      
      {/* <img src={CountBar} className="w-full h-full object-contain" alt="" /> */}

      <div className="">

        <div className="font-poppins text-white text-center justify-center items-center flex gap-8">
          <div>
            <h1 className="text-8xl">01</h1>
            <h1 className="text-xl">Days</h1>
          </div>
          <div>
            <h1 className="text-8xl">01</h1>
            <h1 className="text-xl">Stages</h1>
          </div>
          <div>
            <h1 className="text-8xl">01</h1>
            <h1 className="text-xl">Events</h1>
          </div>
          <div>
            <h1 className="text-8xl">01</h1>
            <h1 className="text-xl">Participants</h1>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Counts;
