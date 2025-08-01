import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PiMedalFill, PiMedalBold, PiMedalLight } from 'react-icons/pi';

const Results = () => {
  const [categories, setCategories] = useState([]);
  const [programs, setPrograms] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState([]);

   const [results, setResults] = useState([]);

  const [filteredWinners, setFilteredWinners] = useState([]);



  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await fetch('https://us-central1-mlpeast.cloudfunctions.net/api/init');
        const data = await res.json();
        setCategories(data.data.categories || []);
        setPrograms(data.data.allPrograms || []);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  // When category changes, filter programs
  useEffect(() => {
    if (selectedCategory) {
      const filtered = programs.filter(
        (program) => program.categoryId === selectedCategory
      );
      setFilteredPrograms(filtered);
    } else {
      setFilteredPrograms([]);
    }
  }, [selectedCategory, programs]);

  useEffect(() => {
    axios.get('YOUR_API_ENDPOINT/results')
      .then(res => setResults(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedProgram) {
      const match = results.find(
        result =>
          result.category === selectedCategory &&
          result.program === selectedProgram
      );
      setFilteredWinners(match?.winners || []);
      console.log(filteredWinners);
      
    } else {
      setFilteredWinners([]);
    }
  }, [selectedCategory, selectedProgram, results]);

  return (
    <section className="mt-16 bg-grape">
      <div className="max-container padding-y padding-x">
        <h1 className="mb-8 text-left font-ppneue text-8xl text-white">Results</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div>
            <form className="mx-auto w-full font-bold font-grotesk">
              {/* CATEGORY SELECT */}
              <div className="relative mb-6">
                <select
                  id="category"
                  className="appearance-none cursor-pointer mb-6 rounded-xl hover:bg-gray-300 bg-light_gray border block w-full p-3"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none text-sm absolute inset-y-0 right-4 flex items-center text-theme_black">▼</div>
              </div>

              {/* PROGRAM SELECT */}
              <div className="relative mb-6">
                <select
                  id="program"
                  className="appearance-none cursor-pointer mb-6 rounded-xl hover:bg-gray-300 bg-light_gray border block w-full p-3"
                  disabled={!selectedCategory}
                >
                  <option value="">Select Program</option>
                  {filteredPrograms.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none text-sm absolute inset-y-0 right-4 flex items-center text-theme_black">▼</div>
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
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-6">
              <div className="bg-white h-72 w-72 rounded-xl border border-theme_black" />
              <button className="bg-theme_yellow py-2.5 px-4 rounded-lg text-black hover:bg-theme_gold">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
