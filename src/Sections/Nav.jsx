import React from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { GiHamburgerMenu } from "react-icons/gi";
import {Sling as Hamburger, Sling} from 'hamburger-react';
import Logo from '../assets/Logo.svg'
import FestTitle from '../assets/FestTitle.svg'

const Nav = () => {
  return (
    <nav className="font-poppins font-semibold top-0 m-0 fixed z-20 bg-light_gray text-black w-full h-16 padding-x flex justify-between items-center shadow-md">
      
      <div className="flex gap-3">
        <img src={Logo} className='h-10' alt="" />
        <img src={FestTitle} className='h-10' alt="" />
      </div>
      
      <li className="flex gap-5 max-md:hidden">
        <ul>Home</ul>
        <ul>News</ul>
        <ul>Result</ul>
        <ul>Gallery</ul>
        <ul>Videos</ul>
        <ul className='text-theme_gold'>Results</ul>
      </li>

      <Menu as="div" className=" md:hidden relative inline-block text-left">
        <div>
          <MenuButton className=" bg-none  text-gray-900">

            <Sling />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Home
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                About
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Gallery
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Videos
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-theme_gold data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Results
              </a>
            </MenuItem>
            
          </div>
        </MenuItems>
      </Menu>

    </nav>
  );
};

export default Nav;
