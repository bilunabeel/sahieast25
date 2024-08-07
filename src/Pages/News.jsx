import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';


const News = () => {


  const newsContent = {header: 'സാഹിത്യോത്സവിന് പ്രൗഢമായ തുടക്കം'};
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="mt-16 padding-y padding-x max-container">
      <h1 className=" mb-8 text-left font-mono text-4xl text-theme_black">
        News
      </h1>
      <div className=" grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8 ">

        
        <Link to={'/sahieast/newscnt'}>
          <div className="w-full h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl">
            <a href="#">
              <img
                className="rounded-tr-3xl rounded-bl-3xl shadow-lg hover:scale-105 transform transition-transform duration-300 relative"
                src="1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="font-baloo   mb-2 text-lg max-w-lg  font-bold tracking-tight text-theme_black">
                  മുപ്പത്തിയൊന്നാമത് മലപ്പുറം ഈസ്റ്റ് ജില്ലാ സാഹിത്യോത്സവിനു എടവണ്ണപ്പാറയിൽ നാളെ തുടക്കമാകും.

                </h5>
                <p className="line-clamp-3 font-baloo leading-5 text-sm">
                  'ഫെസ്റ്റിവൽ ഓഫ് ഹോപ്പ്' എന്ന ശീർഷകത്തിൽ എസ് എസ് എഫ് മലപ്പുറം ഈസ്റ്റ് ജില്ലാ കമ്മിറ്റിയുടെ ആഭിമുഖ്യത്തിൽ സംഘടിപ്പിക്കുന്ന സാഹിത്യോത്സവിന് വെള്ളിയാഴ്ച എടവണ്ണപ്പാറയിൽ തുടക്കമാകും. സമസ്ത ജനറൽ സെക്രട്ടറി പൊന്മള അബ്ദുൽ ഖാദിർ മുസ്‌ലിയാർ ഉദ്ഘാടനം ചെയ്യും. 'നിരാശ ഉൽപാദിപ്പിക്കരുത്, പ്രതീക്ഷ കടൽ കടന്നിട്ടില്ല' എന്ന ശീർഷകത്തിൽ അദ്ദേഹം സാഹിത്യോത്സവിനെ അഭിസംബോധന ചെയ്യും.. 'പ്രതീക്ഷ' പ്രമയേമാകുന്ന മൂന്ന് ദിവസത്തെ പരിപാടിയിൽ വ്യത്യസ്ത സെഷനുകൾക്ക് കെ ഇ എൻ കുഞ്ഞഹമ്മദ്, വിമീഷ് മണിയൂർ, ഡോ. പി സക്കീർ ഹുസൈൻ, നൂറുദ്ദീൻ നൂറാനി, സി എം സ്വാബിർ സഖാഫി തുടങ്ങിയവർ നേതൃത്വം നൽകും. സമാപന സംഗമത്തിൽ പ്രശസ്ത രാഷ്ട്രീയസാമ്പത്തിക വിദഗ്ധൻ ഡോ. പറകാല പ്രഭാകർ മുഖ്യാതിഥിയാകും. 170 മത്സരങ്ങളിലായി പന്ത്രണ്ടു ഡിവിഷനുകളിൽ നിന്നുള്ള മുവ്വായിരത്തോളം മത്സരാർത്ഥികൾ മാറ്റുരയ്ക്കും.
                </p>
              </a>

              

            </div>
            <a
                href="#"
                class="p-5 inline-flex items-center text-sm font-medium text-center text-theme_red"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default News;
