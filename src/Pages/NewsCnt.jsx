import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';

const NewsCnt = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchNewsItem = async () => {
      try {
        const response = await fetch('https://us-central1-mlpeast.cloudfunctions.net/api/news');
        const result = await response.json();
        if (result.success && result.data?.news?.length > 0) {
          const selected = result.data.news.find((item) => item.id === id);
          setNewsItem(selected);
        }
      } catch (err) {
        console.error('Failed to fetch news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!newsItem) {
    return <div className="text-white p-10">News not found.</div>;
  }

  const { header, content, imageUrl, createdAt } = newsItem;

  return (
    <div className='bg-primary_black'>
      <section className="mt-16 max-container padding-y padding-x ">
        <div className="mb-8 flex max-md:flex-col max-md:items-start justify-between items-end ">
          <img className="md:w-2/3 h-auto mb-2 md:mb-6" src={imageUrl} alt="News" />
          <div className="mb-5 max-md:hidden">
            <h2 className="font-poppins mb-2 text-gray-400">
              {new Date(createdAt).toLocaleDateString('en-IN', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </h2>
            <a href="https://whatsapp.com/channel/0029Vahbl5FKWEKmOoxvzj0D">
              <h2 className="text-gray-400 flex items-center cursor-pointer gap-2 leading-4 font-semibold">
                For more<br />updates
                <span><FaSquareWhatsapp color={'green'} size={40} /></span>
              </h2>
            </a>
          </div>
          <a href="https://whatsapp.com/channel/0029Vahbl5FKWEKmOoxvzj0D" className='cursor-pointer md:hidden'>
            <h2 className="flex items-center font-poppins text-xs gap-2 leading-4 font-semibold">
              <span className='text-gray-400'>
                {new Date(createdAt).toLocaleDateString('en-IN')}
              </span>
              For more updates
              <span><FaSquareWhatsapp color={'green'} size={20} /></span>
            </h2>
          </a>
        </div>

        <h1 className="mb-8 w-2/3 text-left font-karthika leading-[1] font-bold text-4xl text-aquamarine">
          {header}
        </h1>

        <div className="text-white font-karthika text-2xl font-medium whitespace-pre-line">
          {content}
        </div>
      </section>
    </div>
  );
};

export default NewsCnt;
