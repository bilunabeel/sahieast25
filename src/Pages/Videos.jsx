import React, {useEffect} from 'react';
import {PiMedalBold, PiMedalFill, PiMedalLight} from 'react-icons/pi';

const Videos = () => {
  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  return (
    <div className="bg-primary_black">
      <section className="mt-16 max-container">
        <div className="padding-y padding-x">

          <h1 className="mb-8 text-left font-ppneue text-8xl text-aquamarine">
            watch sahityotsav
          </h1>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            <div>

              <div className="text-white mx-auto w-full flex flex-col gap-6 font-grotesk">

                <div>
                  <div className="aspect-w-16 aspect-h-9">

                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/55_leoeQEZY?si=hHrtAZeqFDG1v6zg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                  <h1 className="mt-3 font-medium text-xl">
                    The In Betweens | SSF Malappuram East | STAGE 01
                    {' '}
                    {/* <span className="text-red-600 animate-pulse">SOON</span> */}
                  </h1>
                </div>
                <div>
                  <div className="aspect-w-16 aspect-h-9">

                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/jkhzmR1VZgM?si=jGmUucltXeNNYeaS"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                  <h1 className="mt-3 font-medium text-xl">
                    The In Betweens | SSF Malappuram East | STAGE 02
                    {' '}
                    {/* <span className="text-red-600 animate-pulse">SOON</span> */}
                  </h1>
                </div>

              </div>

            </div>
            <div className="w-full font-poppins text-theme_black flex flex-col">
              <div className="grid grid-cols-2 gap-6">

                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3oRwnqGq0j0?si=RhJtSdAUJX1HlXkQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  />
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1VL7kXR925A?si=V8whOn5RT_n0L6h0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  />
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/hnQ-YxZl75M?si=JyIXEOrYJZwmIxDd"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  />
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/574TpMD4t7c?si=Lds8oeOT97bLLFBr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex bg-light_gray h-auto font-poppins" />
      </section>
    </div>
  );
};

export default Videos;
