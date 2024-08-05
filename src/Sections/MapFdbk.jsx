import React from 'react';

const MapFdbk = () => {
  return (
    <section className="max-container padding-y padding-x font-poppins">
      <div className="flex gap-8">
        <div className="flex flex-col w-full gap-6">
          <h1 className="font-poppins font-semibold text-2xl text-center">
            Share with <span className="text-theme_gold">us</span>
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-theme_black p-3 focus:border-theme_gold"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-theme_black p-3 focus:border-theme_gold"
          />
          <textarea name="feedback" id="feedback" className='border border-theme_black p-3' placeholder='Enter your Feedback'></textarea>
          <button className='w-1/2 bg-theme_yellow p-3 font-medium hover:bg-theme_gold'>Submit Feedback</button>
        </div>
        <div className='w-[.2px] h-auto bg-theme_black'></div>
        <div className="h-96 w-full flex flex-col gap-6">
          <h1 className="font-poppins font-semibold text-2xl text-center">
            Reach <span className="text-theme_gold">us</span>
          </h1>
          <div className="h-80 bg-light_gray" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.217264879599!2d75.97413362512978!3d11.245421688933272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6443a70c74a35%3A0xac07e1e4c7c583d7!2sEdavannappara%2C%20Kerala%20673640!5e0!3m2!1sen!2sin!4v1722859066236!5m2!1sen!2sin" className='h-full w-full' ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapFdbk;
