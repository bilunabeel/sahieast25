import React, { useState } from 'react';
import Logo from '../assets/Logo.svg'
import SahiLogo from '../assets/SahiLogoWhiteBG.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Message = () => {

  const [isInView, setIsInView] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      console.log('is in view');
      setIsInView(true);

    }else{
      console.log('is not in view');
      setIsInView(false)
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    root: null, // Use the viewport
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <section className="z-10 bg-white  ">
      
      {/* //what's hope? */}
      <div className="max-container text-left flex justify-between items-center max-md:flex-col-reverse gap-16 padding-y padding-x">
        <div ref={targetRef} className={`flex flex-col gap-5 w-full  ${isInView ? 'animate-fade-left' : 'opacity-0 '} transition-all duration-1000`}>
          <h1 className="text-4xl font-mono ">What's Hope?</h1>
          <p className="font-light font-poppins">
            The Festival of Hope is a beacon of optimism in a world often shrouded in uncertainty. It's a gathering where hearts unite, spirits soar, and the human capacity for resilience is celebrated. Whether it's a platform for young voices to be heard, a celebration of cancer survivors, or a community coming together to support those in need, the essence remains the same: to kindle hope, inspire action, and build a brighter future. Through music, art, storytelling, and shared experiences, the festival becomes a living testament to the enduring power of the human spirit.
          </p>

        </div>
        <div className={`flex w-full gap-4 ${isInView ? 'animate-fade-right' : 'opacity-0 '} transition-all duration-1000`}>

          <img src={Logo} className="h-64 max-md:h-40 w-full" alt="" />
          <img src={SahiLogo} className="h-64 max-md:h-40 w-full" alt="" />
        </div>
      </div>

      

    </section>
  );
};

export default Message;
