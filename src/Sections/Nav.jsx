import React, {useEffect, useRef, useState} from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger, {Sling} from 'hamburger-react';
import Logo from '../assets/Logo.svg';
import FestTitle from '../assets/FestTitle.svg';
// import Results from '../Pages/Results';
import {Link} from 'react-router-dom';
import {MdOutlineLiveTv} from 'react-icons/md';

const Nav = ({onLive}) => {
  const [isOpen, setOpen] = useState (false);
  const menuRef = useRef (null);

  const style = {
    backGroundColor: 'red',
  };

  const handleClickOutside = e => {
    if (menuRef.current && !menuRef.current.contains (e.target)) {
      setMenuOpen (false);
    }
  };

  useEffect (() => {
    document.addEventListener ('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener ('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="font-grotesk font-normal top-0 m-0 fixed z-20 bg-primary_black text-white_text w-full h-16 padding-x flex justify-between items-center shadow-md">

      {/* ------NavFace------ */}
      <Link to={'/'}>
        <div
          className="flex gap-3 cursor-pointer hover:scale-110 transform transition-transform duration-300"
          href="/"
        >
          <img src={Logo} className="h-6" alt="" />
          {/* <img src={FestTitle} className="h-10" alt="" /> */}
        </div>
      </Link>

      {/* ------Menubar------  */}
      <ul className="flex gap-5 max-md:hidden">
        <Link to={'/'}>
          <li className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            Home
          </li>
        </Link>
        <Link to={'/about'}>
          <li className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            About
          </li>
        </Link>
        <Link to={'/news'}>
          <li className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            News

          </li>
        </Link>
        {/* <li className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-theme_gold">
          Gallery
        </li> */}
        <Link to={'/videos'}>
          <li className="hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            Videos
            {onLive &&
              <svg className="absolute left-5 -top-2 animate-bounce h-5 w-5">
                <MdOutlineLiveTv
                  className="text-red-600 rounded"
                  style={style}
                />
              </svg>}
          </li>
        </Link>
        <Link to={'/downloads'}>
          <li className=" hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            Downloads
          </li>
        </Link>
        {/* <Link to={'/results'}>
          <li className="text-aquamarine hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
            Results
          </li>
        </Link> */}
        <li className="text-aquamarine hover:scale-110 transform transition-transform duration-300 cursor-pointer hover:text-celestial_blue">
          <a
            href="https://mlpeast.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Results
          </a>
        </li>

      </ul>

      <Menu as="div" className=" md:hidden relative inline-block text-left">
        <div>
          <MenuButton className=" bg-none  text-aquamarine">

            <Sling toggle={setOpen} toggled={isOpen} />
          </MenuButton>
        </div>

        <MenuItems
          ref={menuRef}
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary_black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">

            <MenuItem>
              <Link to={'/'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >

                  Home
                </a>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={'/about'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >

                  About
                </a>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={'/news'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  News
                </a>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={'/videos'}>
                <a
                  href="#"
                  className="flex gap-1  px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Videos
                  {onLive &&
                    <svg className="animate-bounce w-4 h-4">
                      <MdOutlineLiveTv
                        className="text-red-600 rounded"
                        style={style}
                      />
                    </svg>}
                </a>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to={'/downloads'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Downloads
                </a>
              </Link>
            </MenuItem>

            {/* <MenuItem>
              <Link to={'/results'}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-aquamarine data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Results
                </a>
              </Link>
            </MenuItem> */}

            <MenuItem>
              <a
                href="https://mlpeast.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-aquamarine data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
