import React from 'react';

const Nav = () => {
  return (
    <nav className='bg-green-400 h-16 p-7 flex justify-between items-center'>
      <div className='flex gap-5'>
        <p>Logo</p>
        <p>Festival of Hope</p>
      </div>
      <li className='flex gap-5'>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Gallery</ul>
        <ul>Videos</ul>
        <ul>Results</ul>
      </li>
    </nav>
  );
};

export default Nav;
