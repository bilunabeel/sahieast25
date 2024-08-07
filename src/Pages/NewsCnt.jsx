import React from 'react';
import {FaSquareWhatsapp} from 'react-icons/fa6';

const NewsCnt = () => {
  return (
    <section className="mt-16 max-container padding-y padding-x ">
      <div className="mb-8 flex max-md:flex-col max-md:items-start justify-between items-end ">
        <img className="md:w-2/3 h-auto mb-2 md:mb-6" src="1.jpg" alt="" />
        <div className="mb-5 max-md:hidden">
          <h2 className="font-poppins mb-2 text-gray-400">August 07, 2024</h2>
          <h2 className="flex items-center gap-2 leading-4 font-semibold">
            For more
            <br />
            {' '}
            updates
            {' '}
            <span><FaSquareWhatsapp color={'green'} size={40} /></span>
          </h2>
        </div>
          <h2 className="flex items-center md:hidden font-poppins text-xs gap-2 leading-4 font-semibold">
            <span className='text-gray-400'>August 07, 2024</span>For more updates<span><FaSquareWhatsapp color={'green'} size={20} /></span>
          </h2>
        
      </div>
      <h1 className=" mb-8 w-2/3 text-left font-baloo leading-9 font-bold text-3xl text-theme_black">
        മുപ്പത്തിയൊന്നാമത് മലപ്പുറം ഈസ്റ്റ് ജില്ലാ സാഹിത്യോത്സവിനു എടവണ്ണപ്പാറയിൽ നാളെ തുടക്കമാകും.
      </h1>

      <div className="font-baloo font-xl font-medium">
        എടവണ്ണപ്പാറ: 'ഫെസ്റ്റിവൽ ഓഫ് ഹോപ്പ്' എന്ന ശീർഷകത്തിൽ എസ് എസ് എഫ് മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ആഭിമുഖ്യത്തിൽ സംഘടിപ്പിക്കുന്ന സാഹിത്യോത്സവിന് വെള്ളിയാഴ്ച എടവണ്ണപ്പാറയിൽ തുടക്കമാകും. സമസ്ത ജനറൽ സെക്രട്ടറി പൊന്മള അബ്ദുൽ ഖാദിർ മുസ്‌ലിയാർ ഉദ്ഘാടനം ചെയ്യും. 'നിരാശ ഉൽപാദിപ്പിക്കരുത്, പ്രതീക്ഷ കടൽ കടന്നിട്ടില്ല' എന്ന ശീർഷകത്തിൽ അദ്ദേഹം സാഹിത്യോത്സവിനെ അഭിസംബോധന ചെയ്യും.. 'പ്രതീക്ഷ' പ്രമയേമാകുന്ന മൂന്ന് ദിവസത്തെ പരിപാടിയിൽ വ്യത്യസ്ത സെഷനുകൾക്ക് കെ ഇ എൻ കുഞ്ഞഹമ്മദ്, വിമീഷ് മണിയൂർ, ഡോ. പി സക്കീർ ഹുസൈൻ, നൂറുദ്ദീൻ നൂറാനി, സി എം സ്വാബിർ സഖാഫി തുടങ്ങിയവർ നേതൃത്വം നൽകും. സമാപന സംഗമത്തിൽ പ്രശസ്ത രാഷ്ട്രീയസാമ്പത്തിക വിദഗ്ധൻ ഡോ. പറകാല പ്രഭാകർ മുഖ്യാതിഥിയാകും. 170 മത്സരങ്ങളിലായി പന്ത്രണ്ടു ഡിവിഷനുകളിൽ നിന്നുള്ള മുവ്വായിരത്തോളം മത്സരാർത്ഥികൾ മാറ്റുരയ്ക്കും. ജില്ലയിലെ വിവിധ കാമ്പസുകളിൽ നിന്ന് ഇരുനൂറിലധികം വിദ്യാർത്ഥികളും മത്സരത്തിൻ്റെ ഭാഗമാകും. സമൂഹത്തിൽ രൂപപ്പെടേണ്ട രാഷ്ട്രീയ സാമൂഹിക പ്രത്യാശകളും പ്രതീക്ഷ വഴി നടത്തിയ ചരിത്രങ്ങളും പ്രമേയമാകുന്ന സാഹിത്യോത്സവിൽ കാൽലക്ഷം ജനങ്ങൾ ശ്രോതാക്കളാകും.

      </div>

      <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8 " />
    </section>
  );
};

export default NewsCnt;
