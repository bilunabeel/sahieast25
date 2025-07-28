import React, { useState } from 'react';
import herologo from '../assets/herologo.svg'
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
    <section className="z-10 bg-primary_black  ">
      
      {/* //what's hope? */}
      <div className="max-container text-left flex justify-between items-center max-md:flex-col-reverse gap-16 padding-y padding-x">
        <div ref={targetRef} className={`flex flex-col gap-8 w-full  ${isInView ? 'animate-fade-left' : 'opacity-0 '} transition-all duration-1000`}>
          <h1 className="text-8xl leading-[.59] font-ppneue text-aquamarine">What's <br /><span className='text-celestial_blue'>The In-Betweens?</span></h1>
          <p className="font-light text-white font-grotesk leading-5">
      
        The In-Betweens are the spaces and moments that holds us together, the unseen rope that binds us despite our countless diversities. The soul of the theme is embedded in the style and design of the identity of the festival. Multifont typography - an extension of Typographic Dualism - is used in the title fonts. The idea at the core of Typographic Dualism is harmony, the fonts are “contrasting but complementary” - just like humans and the universe itself. Gradients are used to denote a continuity, which brings us back to the theme.

          </p>

        </div>
        <div className={`flex w-full gap-4 ${isInView ? 'animate-fade-right' : 'opacity-0 '} transition-all duration-1000`}>

          <img src={herologo} className="h-64 max-md:h-40 w-full" alt="" />
          {/* <img src={SahiLogo} className="h-64 max-md:h-40 w-full" alt="" /> */}
        </div>
      </div>

      

    </section>
  );
};

export default Message;
