import React from 'react';
import {PiMedalFill} from 'react-icons/pi';
import {PiMedalBold} from 'react-icons/pi';
import {PiMedalLight} from 'react-icons/pi';

const Results = () => {
  return (
    <section className="mt-16 max-container padding-y padding-x">
      <h1 className="mb-8 text-left font-mono text-4xl text-theme_black">
        Result
      </h1>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">

        <form className="mx-auto w-full">

          <select
            id="category"
            className="mb-6 bg-light_gray border border-theme_black text-theme_black text-sm focus:ring-theme_black focus:border-theme_gold block w-full p-2.5 "
          >
            <option selected>Select Category</option>
            <option value="US">Lower Primary</option>
            <option value="US">Lower Primary Girls</option>
            <option value="US">Upper Primary</option>
            <option value="US">Upper Primary Girls</option>
            <option value="US">High School</option>
            <option value="US">High School Girls</option>
            <option value="US">Higher Secondary</option>
            <option value="US">Higher Secondary Girls</option>
            <option value="US">Junior</option>
            <option value="US">Junior Girls</option>
            <option value="US">Senior</option>
            <option value="US">Senior Girls</option>
            <option value="US">General</option>

          </select>

          <select
            id="event"
            className="mb-6 bg-light_gray border border-theme_black text-theme_black text-sm focus:ring-theme_black focus:border-theme_gold block w-full p-2.5"
          >
            <option selected>Select Item</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

        </form>

        <div className="winners w-full h-96 font-poppins text-theme_black flex flex-col items-center">
          
            <h1 className="text-2xl font-light">General</h1>
            <h1 className="text-3xl font-bold">Group Song (B)</h1>
            <div className='flex items-center gap-2 mt-6'>
              <PiMedalFill size={30} color={'gold'} className="first_place" />
              <div>
                <h1 className="font-semibold text-xl">Mohamed Nabeel</h1>
                <h1 className="font-light">Pulikkal</h1>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-6'>
            <PiMedalBold size={30} color={'silver'} className="second_place" />
              <div>
                <h1 className="font-semibold text-xl">Mohamed Nabeel</h1>
                <h1 className="font-light">Kondotty</h1>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-6'>
            <PiMedalLight size={30} color={'bronze'} className="third_place" />
              <div>
                <h1 className="font-semibold text-xl">Mohamed Nabeel</h1>
                <h1 className="font-light">Perinthalmanna</h1>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Results;
