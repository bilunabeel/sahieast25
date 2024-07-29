import React from 'react';
import Nav from './Sections/Nav';
import Hero from './Sections/Hero';
import Message from './Sections/Message';
import Ribbon from './components/Ribbon';


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
<Ribbon/>
      <Message />
    </div>
  );
};

export default Home;
