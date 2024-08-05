import React, { useState } from 'react';

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
    <section className="max-container padding-y padding-x font-poppins">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col w-full gap-6">
          <h1 className="font-poppins font-semibold text-2xl text-center">
            Share with <span className="text-theme_gold">us</span>
          </h1>
          <form onSubmit={handleSubmit} action="" className="flex flex-col w-full gap-6">

            <input
              type="text"
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-theme_black p-3 focus:border-theme_gold"
            />
            <input
              type="email"
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-theme_black p-3 focus:border-theme_gold"
            />
            <textarea
              name="feedback"
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border border-theme_black p-3 min-h-24"
              placeholder="Enter your Feedback"
            />
            <button type='submit' className="w-1/2 max-md:w-full bg-theme_yellow p-3 font-medium hover:bg-theme_gold">
              Submit Feedback
            </button>
          </form>
          {response && <p className="mt-4">{response}</p>}
        </div>
        <div className="w-[.2px] h-auto bg-theme_black max-md:hidden" />
        <div className="h-96 w-full flex flex-col gap-6">
          <h1 className="font-poppins font-semibold text-2xl text-center">
            Reach <span className="text-theme_gold">us</span>
          </h1>
          <div className="h-80 bg-light_gray">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.217264879599!2d75.97413362512978!3d11.245421688933272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6443a70c74a35%3A0xac07e1e4c7c583d7!2sEdavannappara%2C%20Kerala%20673640!5e0!3m2!1sen!2sin!4v1722859066236!5m2!1sen!2sin"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapFdbk;
