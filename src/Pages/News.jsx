import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNews = async () => {
      try {
        const response = await axios.get('https://us-central1-mlpeast.cloudfunctions.net/api/news');
        if (response.data.success) {
          setNewsList(response.data.data.news);
        } else {
          console.error("API call failed with success=false");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='bg-primary_black'>
      <section className="mt-16 padding-y padding-x max-container">
        <h1 className="mb-8 text-left font-ppneue text-8xl text-aquamarine">
          News
        </h1>

        {loading ? (
          <p className="text-white text-lg">Loading news...</p>
        ) : (
          <div className="grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-8">
            {newsList.map((item) => (
             <Link to={`/newscnt/${item.id}`} key={item.id}>
                <div className="bg-white w-full h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl">
                  <img
                    className="rounded-tr-3xl rounded-bl-3xl shadow-lg hover:scale-105 transform transition-transform duration-300 relative"
                    src={item.imageUrl}
                    alt={item.header}
                  />
                  <div className="p-5">
                    <h5 className="font-karthika mb-2 text-3xl leading-7 max-w-lg font-bold tracking-tight text-grape">
                      {item.header}
                    </h5>
                    <p className="line-clamp-3 font-karthika leading-5 text-lg">
                      {item.content}
                    </p>
                  </div>
                  <span
                    className="p-5 inline-flex items-center text-sm font-medium text-center text-grape"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default News;
