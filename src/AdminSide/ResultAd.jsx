import React from 'react';

const ResultAd = () => {

  const catgs = ['Select Category',
    'Lower Primary',
    'Lower Primary Girls',
    'Upper Primary',
    'Upper Primary Girls',
    'High School',
    'High School Girls',
    'Higher Secondary',
    'Higher Secondary Girls',
    'Junior',
    'Junior Girls',
    'Senior',
    'Senior Girls',
    'General',
  ];
  const items = ['Select Item',
    'Lower Primary',
    'Lower Primary Girls',
    'Upper Primary',
    'Upper Primary Girls',
    'High School',
    'High School Girls',
    'Higher Secondary',
    'Higher Secondary Girls',
    'Junior',
    'Junior Girls',
    'Senior',
    'Senior Girls',
    'General',
  ];
const teams = ['Select Team','Kondotty','Pulikkal','Malappuram','Manjeri West', 'Manjeri East', 'Perinthalmanna', 'Kolathur','Wandoor','Areekode','Nilambur','Edakkara']

  return (
    <div className="border-x-2   border-b-2 border-theme_black w-full  pb-10 pt-6 padding-x">
      <h1 className="mb-6 font-poppins font-semibold text-center text-3xl">
        Results
      </h1>
      <form className="grid grid-cols-2 max-md:grid-cols-1 gap-6 font-poppins">
        <select
          name="category"
          className="w-full cursor-pointer border border-theme_black p-3"
          id=""
        >
          {catgs.map (cat => <option value="">{cat}</option>)}
        </select>
        <select
          name="item"
          className="w-full cursor-pointer border border-theme_black p-3"
          id=""
        >
          {items.map (item => <option value="">{item}</option>)}
        </select>
        <input type="text"  className='w-full cursor-pointer border border-theme_black p-3 placeholder:text-black' placeholder='Enter Name' />
        <select
          name="item"
          className="w-full cursor-pointer border border-theme_black p-3"
          id=""
        >
          {teams.map (team => <option value="">{team}</option>)}
        </select>
        <label htmlFor='poster-upload' className='border cursor-pointer border-theme_black w-full p-3 text-center font-medium bg-theme_yellow'>Upload Poster Template</label>
        <input className='hidden' id='poster-upload' type="file" placeholder='Upload Poster Template' />
        <button className='border border-theme_black cursor-pointer bg-theme_red p-3 text-white font-medium' type='submit'>Upload</button>
        
      </form>
    </div>
  );
};

export default ResultAd;
