import React from 'react';
import {Link} from 'react-router-dom';

const News = () => {
  const newsContent = {header: 'സാഹിത്യോത്സവിന് പ്രൗഢമായ തുടക്കം'};
  return (
    <section className="mt-16 padding-y padding-x">
      <h1 className=" mb-8 text-left font-mono text-4xl text-theme_black">
        News
      </h1>
      <div className=" grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8 ">

        <Link to={'/sahieast/newscnt'}>
          <div className="w-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl">
            <a href="#">
              <img
                className="rounded-tr-3xl rounded-bl-3xl shadow-lg hover:scale-105 transform transition-transform duration-300 relative"
                src="1.jpg"
                alt=""
              />
            </a>
            <div className="p-5 ">
              <a href="#">
                <h5 className="font-baloo line-clamp-3  mb-2 text-2xl max-w-lg  font-bold tracking-tight text-theme_black">
                മുപ്പത്തിയൊന്നാമത് മലപ്പുറം ഈസ്റ്റ് ജില്ലാ സാഹിത്യോത്സവിനു എടവണ്ണപ്പാറയിൽ നാളെ തുടക്കമാകും.

                </h5>
              </a>

              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-center text-theme_red"
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
          </div>
        </Link>

       

      </div>
    </section>
  );
};

export default News;
