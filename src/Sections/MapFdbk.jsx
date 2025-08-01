import React, {useState} from 'react';

const MapFdbk = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [feedback, setFeedback] = useState ('');
  const [response, setResponse] = useState (null);

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const res = await axios.post (
        'https://script.google.com/macros/s/AKfycbzAJdNPFsBooq-VyyN8YBsBWMj3gv5MdgqreB8f9AJPevWf3Niw-55uTRxEE28ZEImZMw/exec',
        {name, email, feedback}
      );
      setResponse ('Feedback Submitted Successfully!');
      setName ('');
      setEmail ('');
      setFeedback ('');
    } catch (error) {
      setResponse ('Error submitting Feedback!');
    }
  };

  return (
    <div className='bg-primary_black'>
      
    
    <section className=" max-container padding-y padding-x font-poppins">
      <div className="flex gap-8 max-md:flex-col">
        {/* <div className="flex flex-col w-full gap-6">
          <h1 className="font-poppins font-semibold text-2xl text-center">
            Share with <span className="text-theme_gold">us</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col w-full gap-6"
          >

            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName (e.target.value)}
              placeholder="Enter your name"
              className="border border-theme_black p-3 focus:border-theme_gold"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail (e.target.value)}
              placeholder="Email"
              className="border border-theme_black p-3 focus:border-theme_gold"
            />
            <textarea
              name="feedback"
              id="feedback"
              value={feedback}
              onChange={e => setFeedback (e.target.value)}
              className="border border-theme_black p-3 min-h-24"
              placeholder="Enter your Feedback"
            />
            <div className='hover-animated-button'>
              <button type='submit' className="btn max-md:w-full relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-theme_yellow  hover:bg-white group p-3 w-1/2 ">
                <span className="w-full h-48 bg-theme_black absolute bottom-0 left-0 translate-x-full ease-out duration-300 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-center text-black transition-colors duration-75 ease-in-out group-hover:text-white">
                  Submit Feedback
                </span>
              </button>
            </div>
            
          </form>
          {response && <p className="mt-4">{response}</p>}
        </div>
        <div className="w-[.2px] h-auto bg-theme_black max-md:hidden" /> */}
        <div className="h-96 w-full flex flex-col gap-6">
          <h1 className="font-grotesk text-white font-semibold text-2xl text-center">
            Reach <span className="text-aquamarine">us</span>
          </h1>
          <div className="h-80 bg-primary_black">
            
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.084765566754!2d75.98414307987969!3d11.134022960770759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA4JzAyLjUiTiA3NcKwNTknMjAuNSJF!5e1!3m2!1sen!2sus!4v1753702168374!5m2!1sen!2sus&maptype=roadmap" className='h-full w-full rounded-2xl'></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MapFdbk;
