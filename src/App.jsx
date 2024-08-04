import {useState} from 'react';
import {HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Home from './Home';
import Nav from './Sections/Nav';
import News from './Pages/News';
import Results from './Pages/Results';
import Footer from './Sections/Footer';


function App () {
  const [count, setCount] = useState (0);

  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="*" element={<Navigate to="/sahieast/" />} />
        <Route path="/sahieast/" element={<Home />} />
        <Route path="/sahieast/news" element={<News />} />
        <Route path="/sahieast/results" element={<Results />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
