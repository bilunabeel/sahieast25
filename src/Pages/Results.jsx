import React, {useEffect} from 'react';
import {PiMedalFill} from 'react-icons/pi';
import {PiMedalBold} from 'react-icons/pi';
import {PiMedalLight} from 'react-icons/pi';

const Results = () => {
  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  return (
    <section className="mt-16 bg-grape">
      <div className="max-container padding-y padding-x">

        <h1 className="mb-8 text-left font-ppneue text-8xl text-white">
          Results
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div>

            <form className="mx-auto w-full font-bold font-grotesk">
              <div className="relative mb-6">
                <select
                  id="category"
                  className="appearance-none cursor-pointer mb-6 rounded-xl hover:bg-gray-300 bg-light_gray border block w-full p-3"
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
                <div className="pointer-events-none text-sm absolute inset-y-0 right-4 flex items-center text-theme_black">
                  ▼
                </div>
              </div>
              <div className="relative mb-6">
                <select
                  id="event"
                  className="appearance-none cursor-pointer mb-6 rounded-xl hover:bg-gray-300 bg-light_gray border block w-full p-3"
                >
                  <option selected>Select Item</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <div className="pointer-events-none text-sm absolute inset-y-0 right-4 flex items-center text-theme_black">
                  ▼
                </div>
              </div>

            </form>

            <p className="max-md:hidden font-karthika text-white mt-10 text-3xl leading-8 tracking-tight">
              നമ്മൾ, അഥവാ അക്ഷരം, വാക്ക്, മരം, അരുവി, മനുഷ്യൻ, മണ്ണ്, കഥ, കവിത, ഓർമ്മ, എല്ലാം പരസ്പരം പ്രസവിച്ചതാണ്.
അനുഭവഭേദ്യമായ ഒരു പൊക്കിൾ ചൂര് നമുക്കിടയിൽ മണക്കുന്നുണ്ട്. അറുത്ത് മാറ്റാനാവാത്ത ഒരു കണ്ണി നമ്മെ അണച്ചു കൂട്ടുന്നുണ്ട്.
            </p>

          </div>

          <div className="winners w-full h-auto font-grotesk rounded-xl bg-light_gray text-theme_black flex flex-col items-center border border-theme_black p-5">

            <h1 className="text-3xl font-medium animate-pulse text-red-600">
              Results not yet published!
            </h1>

          </div>
        </div>
      </div>

      <div className="w-full flex bg-primary_black h-auto font-grotesk">
        <div className="max-container padding-y padding-x flex max-lg:flex-col gap-8">

          <div className="flex flex-col items-center gap-6">
            <div className="bg-white h-72 w-72 rounded-xl border border-theme_black" />
            <button className="bg-theme_yellow py-2.5 px-4 rounded-lg text-black hover:bg-theme_gold">
              Download
            </button>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white h-72 w-72 rounded-xl border border-theme_black" />
            <button className="bg-theme_yellow py-2.5 px-4 rounded-lg text-black hover:bg-theme_gold">
              Download
            </button>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white h-72 w-72 rounded-xl border border-theme_black" />
            <button className="bg-theme_yellow py-2.5 px-4 rounded-lg text-black hover:bg-theme_gold">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
