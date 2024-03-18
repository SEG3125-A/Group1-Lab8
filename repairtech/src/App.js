import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; // Adjust the path as necessary
import HomePage from './Pages/Homepage';
import Services from './Pages/Services';
import Technicians from './Pages/Technicians';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <Navbar /> {/* Include the Navbar component */}
        </header>

        {/* Routing Setup */}
        <Routes>
          <Route path="/Pages/Homepages.js" element={<HomePage />} exact /> 
          <Route path='/' element={<HomePage />}/>
          <Route path="/Pages/Services.js" element={<Services />} />
          <Route path='/Pages/Technicians.js' element={<Technicians />}/>
          <Route path='/Pages/AboutUs.js' element={<AboutUs />}/>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;



