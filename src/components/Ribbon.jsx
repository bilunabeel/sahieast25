import React, {  useState } from 'react'
import RibbonBar from '../assets/RibbonWithBG.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Ribbon = () => {

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
    <div ref={targetRef} className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <img src={RibbonBar} className='-mt-36' />
    </div>
  )
}

export default Ribbon