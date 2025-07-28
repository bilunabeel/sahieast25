import React, {useEffect, useRef} from 'react';
import {GiTrophyCup} from 'react-icons/gi';
import AnimatedCounter from './AnimatedCounter';

const Score = ({scoreOn, setScoreOn}) => {

  const scoreRef = useRef (null);
  const winners= [{team:'Kondotty',Point:0},{team:'Areekode',Point:0},{team:'Pulikkal',Point:0}] 
  const teamPoints = [{team:'Edakkara',Point:0},{team:'Nilambur',Point:0},{team:'Kolathur',Point:0},{team:'Manjeri East',Point:0},{team:'Manjeri West',Point:0},{team:'Perinthalmanna',Point:0},{team:'Malappuram',Point:0},{team:'Wandoor',Point:0}]

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
        className="h-16 w-10 hover:w-12  bg-celestial_blue rounded-r-full flex justify-center items-center cursor-pointer hover:bg-grape transition-all duration-300 ease-in-out"
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
              {winners.map((winner)=>(<li className="flex items-center gap-3">
                {winner.team}
                {' '}
                <span className=" text-2xl">
                 {winner.Point>0 ? <AnimatedCounter endValue={winner.Point} duration={1000} />:0}
                </span>
              </li>))}
              
            </ul>

            <div className="bg-black w-full h-[.1px] my-2" />

            <ul className="text-lg">
              {teamPoints.map((team)=>(<li className="flex items-center gap-3">
                {team.team}
                {' '}
                <span className=" text-xl">
                  {team.Point>0 ? <AnimatedCounter endValue={0} duration={1000} /> :0}
                </span>
              </li>)) }
              
            </ul>

          </div>
        </div>}

    </section>
  );
};

export default Score;
