import React from 'react';
import Footer_Bar from '../assets/Footer_Ribbon.svg';
import Org from '../assets/Org.svg';

import {FaSquareYoutube} from 'react-icons/fa6';
import {FaSquareInstagram} from 'react-icons/fa6';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {BsThreadsFill} from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='mt-10'>
      <img src={Footer_Bar} alt="" />
      <div className="bg-theme_black py-16 padding-x">

        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-5 max-container">
          <img src={Org} className="h-5" />
          <div className='text-white flex gap-2'>
            <BsThreadsFill />
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
