import React, {useEffect} from 'react';
import Logo from '../assets/herologo.svg';
import SahiLogo from '../assets/Sahi_logo.svg'
import RibbonNoBG from '../assets/RibbonNoBG.svg'

const About = () => {
  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  return (
    <section className="mt-16 bg-primary_black">
      <div className="h-96 w-full overflow-hidden">
        <img src="4.jpg" className="w-full h-[400px] max-lg:h-72 absolute object-cover " alt="" />
      </div>
      <img src={RibbonNoBG} className='-mt-20 max-lg:-mt-36 z-10 relative overflow-hidden' />
      <div className="max-container padding-y padding-x">
        <h1 className="leading-[.7] mb-8 text-left font-ppneue text-8xl max-sm:text-[75px] text-white">
          <span className="text-aquamarine">Hope</span>
          {' '}
          through
          {' '}
          <span className="text-celestial_blue">Sahityotsav</span>
        </h1>
        <div className="flex max-md:flex-col max-md:items-center justify-between gap-12">
          <p className="font-grotesk text-white md:w-2/3">
            Sahityotsav, Kerala's premier literary festival, returns this year with a powerful theme: Festival of Hope. In a world often shrouded in darkness, we turn to the enduring power of words to illuminate stories of resilience, resistance, and the unwavering pursuit of a just future.
            <br /><br />
            This year, Malappuram East District Sahityotsav celebrates the hope that burns brightest in the hearts of the marginalized. We will amplify the voices of minorities and disadvantaged communities, showcasing their struggles and aspirations through literature, poetry, and discourse.
            <br /><br />
            We honor the unwavering hope of the Palestinians, their enduring dream of a homeland. Their story resonates with student movements across the globe who raise their voices in solidarity, demanding a world free from oppression.
          </p>
          <div className='flex  md:flex-col md:gap-6 gap-12 items-center'>
            <img src={Logo} className="h-64" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
