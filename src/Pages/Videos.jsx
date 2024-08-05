import React from 'react';

const Videos = () => {
  return (
    <div className="mt-16">
      <div className=" padding-y padding-x">
        <h1 className="mb-8 text-left font-mono text-4xl text-theme_black">
          Watch sahityotsav
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-12 ">

          <div className=" h-full">
            <div className="mb-6">
              <div className="aspect-w-16 aspect-h-9">

                <iframe
                  src="https://www.youtube.com/embed/lE1lSbexl7k"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <h1 className="font-poppins font-medium max-md:text-x text-3xl mt-2">
                Stage 01 | Festival of Hope
              </h1>
            </div>
            <div>
              <div className="aspect-w-16 aspect-h-9">

                <iframe
                  src="https://www.youtube.com/embed/lE1lSbexl7k"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <h1 className="font-poppins font-medium text-3xl mt-2">
                Stage 02 | Festival of Hope
              </h1>
            </div>
          </div>

          {/* <div className="bg-black w-[1px] h-screen" /> */}

          <div className=" h-16">
            <div className="grid grid-cols-2 gap-8">

              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                src="https://www.youtube.com/embed/lE1lSbexl7k"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
