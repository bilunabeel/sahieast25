import React, {useState} from 'react';
import ResultAd from './ResultAd';
import NewsAd from './NewsAd';
import VideosAd from './VideosAd';
import GalleryAd from './GalleryAd';

const Admin = () => {
  const [activeTab, setActiveTab] = useState ('results');

  const handleClick = tab => {
    setActiveTab (tab);
  };

  return (
    <div className="mt-16 padding-y padding-x max-container">

      <div className="h-16 w-full bg-theme_green mb-6 px-3">
        <div className="h-full text-white font-poppins flex gap-6  items-center">
          <h1
            onClick={() => {
              handleClick ('results');
            }}
            className={`font-poppins font-medium text-center max-md:text-sm text-xl ${activeTab === 'results' ? 'bg-theme_yellow' : 'bg-none'} py-5 w-full`}
          >
            Results
          </h1>
          <h1
            onClick={() => {
              handleClick ('news');
            }}
            className={`font-poppins font-medium text-center max-md:text-sm text-xl ${activeTab === 'news' ? 'bg-theme_yellow' : 'bg-none'} py-5 w-full`}
          >
            News
          </h1>
          <h1
            onClick={() => {
              handleClick ('videos');
            }}
            className={`font-poppins font-medium text-center max-md:text-sm text-xl ${activeTab === 'videos' ? 'bg-theme_yellow' : 'bg-none'} py-5 w-full`}
          >
            Videos
          </h1>
          <h1
            onClick={() => {
              handleClick ('gallery');
            }}
            className={`font-poppins font-medium text-center max-md:text-sm text-xl ${activeTab === 'gallery' ? 'bg-theme_yellow' : 'bg-none'} py-5 w-full`}
          >
            Gallery
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {activeTab === 'results' && <ResultAd />}
        {activeTab === 'news' && <NewsAd />}
        {activeTab === 'videos' && <VideosAd />}
        {activeTab === 'gallery' && <GalleryAd />}
      </div>
    </div>
  );
};

export default Admin;
