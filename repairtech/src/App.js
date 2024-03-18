// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomePage from './Pages/Homepage';
import Services from './Pages/Services';
import Technicians from './Pages/Technicians';
import AboutUs from './Pages/AboutUs';
import OnlineBooking from './Pages/Onlinebooking';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/Pages/Homepages.js" element={<HomePage />} exact /> 
          <Route path='/' element={<HomePage />} />
          <Route path="/Pages/Services.js" element={<Services />} />
          <Route path='/Pages/Technicians.js' element={<Technicians />} />
          <Route path='/Pages/AboutUs.js' element={<AboutUs />} />
          <Route path='/Pages/OnlineBooking.js' element={<OnlineBooking />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
