import React from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { GiHamburgerMenu } from "react-icons/gi";
import {Sling as Hamburger, Sling} from 'hamburger-react';
import Logo from '../assets/Logo.svg';
import FestTitle from '../assets/FestTitle.svg';
import News from '../Pages/News';
import Results from '../Pages/Results';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="font-poppins font-semibold top-0 m-0 fixed z-20 bg-light_gray text-black w-full h-16 padding-x flex justify-between items-center shadow-md">
<Link to={'/'}>
      <div
      
      className="flex gap-3 cursor-pointer hover:scale-110 transform transition-transform duration-300"
      href="/"
      >
        <img src={Logo} className="h-10" alt="" />
        <img src={FestTitle} className="h-10" alt="" />
      </div>
        </Link>

      <li className="flex gap-5 max-md:hidden">
        <Link to={'/'}>
        <ul className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_gold">
          Home
        </ul>
        </Link>
        <Link to={"/sahieast/news"}>
          <ul className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_gold">
            News
          </ul>
        </Link>
        <ul className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_gold">
          Gallery
        </ul>
        <ul className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_gold">
          Videos
        </ul>
        <Link to={'/sahieast/results'}>
          <ul className="text-theme_gold hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_red">
            Results
          </ul>
        </Link>
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
              <Link to={'/'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >

                  Home
                </a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={'/sahieast/news'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  News
                </a>
              </Link>
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
              <Link to={'/sahieast/results'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-theme_gold data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Results
                </a>
              </Link>
            </MenuItem>

          </div>
        </MenuItems>
      </Menu>

    </nav>
  );
};

export default Nav;
