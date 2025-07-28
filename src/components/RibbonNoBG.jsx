import React, {  useState } from 'react'
import RibbonBar from '../assets/RibbonNoBG.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Ribbon = () => {

  


  return (
    <div >
        <img src={RibbonBar} className='-mt-36' />
    </div>
  )
}

export default Ribbon