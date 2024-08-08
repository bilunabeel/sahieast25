import React, {useEffect, useRef} from 'react';
import {GiTrophyCup} from 'react-icons/gi';
import AnimatedCounter from './AnimatedCounter';

const Score = ({scoreOn, setScoreOn}) => {
  const scoreRef = useRef (null);

  const handleToggle = () => {
    setScoreOn (!scoreOn);
    console.log (scoreOn);
  };

  const handleClickOutside = e => {
    if (scoreRef.current && !scoreRef.current.contains (e.target)) {
      setScoreOn (false);
    }
  };

  useEffect (() => {
    document.addEventListener ('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener ('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="mt-72 z-150 fixed flex gap-1">

      <div
        onClick={handleToggle}
        className="h-16 w-10 hover:w-12  bg-theme_yellow rounded-r-full flex justify-center items-center cursor-pointer hover:bg-theme_gold transition-all duration-300 ease-in-out"
      >
        <GiTrophyCup />
      </div>

      {scoreOn &&
        <div
          ref={scoreRef}
          className="w-72 flex animate-fade-right animate-duration-100"
        >
          {/* <div className="w-0 h-0 border-r-[15px] border-r-theme_yellow border-b-[15px] border-b-transparent" /> */}
          <div className="p-8 w-72 ml-2 bg-theme_yellow font-poppins rounded-3xl flex flex-col">
            <h1 className="font-semibold text-xl text-left">Score Board</h1>

            <div className="bg-black h-[.1px] w-full my-2" />

            <ul className="text-xl font-semibold">
              <li className="flex items-center gap-3">
                Kondotty
                {' '}
                <span className=" text-2xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Areekode
                {' '}
                <span className=" text-2xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
                {' '}
              </li>
              <li className="flex items-center gap-3">
                Pulikkal
                {' '}
                <span className=" text-2xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
                {' '}
              </li>
            </ul>

            <div className="bg-black w-full h-[.1px] my-2" />

            <ul className="text-lg">
              <li className="flex items-center gap-3">
                Malappuram
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Edakkara
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Nilambur
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Kolathur
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Manjeri West
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Manjeri East
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Pulikkal
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
              <li className="flex items-center gap-3">
                Perinthalmanna
                {' '}
                <span className=" text-xl">
                  <AnimatedCounter endValue={300} duration={1000} />
                </span>
              </li>
            </ul>

          </div>
        </div>}

    </section>
  );
};

export default Score;
