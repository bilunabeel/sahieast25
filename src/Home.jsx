import React from 'react';
import Nav from './Sections/Nav';
import Hero from './Sections/Hero';
import Message from './Sections/Message';
import Ribbon from './components/Ribbon';
import WhatSahi from './Sections/WhatSahi';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Ribbon />
      <Message />
      <WhatSahi />
    </div>
  );
};

export default Home;
