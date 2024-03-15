import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; // Adjust the path as necessary
import HomePage from './Pages/Homepage';
{/*import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';*/}
// Import Page3 and Page4 if they exist

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
          {/*<Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          {/* Define routes for Page3 and Page4 if necessary */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


