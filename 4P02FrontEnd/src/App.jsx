import Landing from './Pages/Landing'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound';

import NavBar from './Components/NavBar/NavBar';

import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element = {<Landing />} />
                <Route path="/about" element = {<About />} />
                {/* TODO Add Rest of the Routes Here */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
