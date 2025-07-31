import React, { useEffect, useRef, useState } from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import AnimatedCounter from './AnimatedCounter';

const Score = ({ scoreOn, setScoreOn }) => {
  const scoreRef = useRef(null);

  // ✅ State to hold the fetched team scores
  const [teams, setTeams] = useState([]);

  // ✅ Fetch scoreboard data
  useEffect(() => {
    const fetchScoreboard = async () => {
      try {
        const response = await fetch('https://us-central1-mlpeast.cloudfunctions.net/api/scoreboard')
        const data = await response.json();
        if (data.success && data.data?.teams) {
          setTeams(data.data.teams);
        }
      } catch (error) {
        console.error('Failed to fetch scoreboard:', error);
      }
    };

    fetchScoreboard();

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setScoreOn(!scoreOn);
    console.log(scoreOn);
  };

  const handleClickOutside = (e) => {
    if (scoreRef.current && !scoreRef.current.contains(e.target)) {
      setScoreOn(false);
    }
  };

  return (
    <section className="mt-72 z-150 fixed flex gap-1">
      <div
        onClick={handleToggle}
        className="h-16 w-10 hover:w-12 bg-celestial_blue rounded-r-full flex justify-center items-center cursor-pointer hover:bg-grape transition-all duration-300 ease-in-out"
      >
        <GiTrophyCup />
      </div>

      {scoreOn && (
        <div
          ref={scoreRef}
          className="w-72 flex animate-fade-right animate-duration-100"
        >
          <div className="p-8 w-72 ml-2 bg-aquamarine font-ppneue rounded-3xl flex flex-col">
            <h1 className="text-4xl text-left">Score Board</h1>

            <div className="bg-black h-[.1px] w-full my-2" />

            <ul className="text-xl font-grotesk font-semibold">
              {teams.map((team) => (
                <li key={team.name} className="flex items-center gap-3">
                  {team.name}
                  <span className="text-2xl">
                    {team.score > 0 ? (
                      <AnimatedCounter endValue={team.score} duration={1000} />
                    ) : (
                      0
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Score;
