import {useState} from 'react';
import {HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Home from './Home';
import Nav from './Sections/Nav';
import Results from './Pages/Results';
import Footer from './Sections/Footer';
import Live from './components/Live';
import Videos from './Pages/Videos';
import Score from './components/Score';
import NewsCnt from './Pages/NewsCnt';
import Downloads from './Pages/Downloads';
import Admin from './AdminSide/Admin';
import About from './Pages/About';
import News from './Pages/News';


function App () {
  const [count, setCount] = useState (0);
  const [onLive, setOnlive] = useState (true);
  const [scoreOn, setScoreOn] =useState(false)

  return (
    <Router>
      <Nav onLive={onLive} />
      {onLive && <Live />}
      <Score scoreOn={scoreOn} setScoreOn={setScoreOn} />
      
      <Routes>

        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/newscnt/:id" element={<NewsCnt />} />
        <Route path="/downloads" element={<Downloads/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/videos" element={<Videos />} />
        {/* <Route path="/admin" element={<Admin/>} /> */}

      </Routes>

      <Footer  />
      
    </Router>
  );
}

export default App;
