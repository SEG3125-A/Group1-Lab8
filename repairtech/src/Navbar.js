import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file with the styles

function Navbar({ closeNavbar }) {
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [pageTitle, setPageTitle] = useState('');

  // Function to close the navbar when a link is clicked
  const handleNavLinkClick = () => {
    setIsNavExpanded(false);
    if (closeNavbar) closeNavbar();
  };

  // Function to handle hamburger button click
  const handleButtonClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  // Update page title when the location changes
  useEffect(() => {
    switch (location.pathname) {
      case '/Pages/Homepages.js':
      case '/':
        setPageTitle('');
        break;
      case '/Pages/Services.js':
        setPageTitle('Services');
        break;
      case '/Pages/Technicians.js':
        setPageTitle('Technicians');
        break;
        case '/Pages/OnlineBooking.js':
        setPageTitle('OnlineBooking');
        break;
      case '/Pages/AboutUs.js':
        setPageTitle('About Us');
        break;
      default:
        setPageTitle('');
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className='menu-button'>
        <button className="btn btn-primary hamburger-btn" onClick={handleButtonClick}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
      <div className={`sidebar bg-light ${isNavExpanded ? 'expanded' : 'collapsed'}`} style={{ width: isNavExpanded ? '250px' : '0', transition: '0.3s' }}>
        <a href="#" className="closebtn" onClick={() => setIsNavExpanded(false)}>&times;</a>
        {/* Use handleNavLinkClick to close navbar on click */}
        <Link to="/Pages/Homepages.js" onClick={handleNavLinkClick}>Homepage</Link>
        <Link to="/Pages/AboutUs.js" onClick={handleNavLinkClick}>About Us</Link>
        <Link to="/Pages/Services.js" onClick={handleNavLinkClick}>Services</Link>
        <Link to="/Pages/Technicians.js" onClick={handleNavLinkClick}>Technicians</Link>
        <Link to="/Pages/OnlineBooking.js" onClick={handleNavLinkClick}>Online Booking</Link>
      </div>
      <div className="title-container">
      <div className="left-side-text">RepairTech 
      <p>Home of all your tech repairs</p>
      </div>
      <h1 className="page-title">{pageTitle}</h1>
      <div className="right-side-placeholder"></div> {/* Placeholder to balance the flexbox */}
      </div>
    </>
  );
}

export default Navbar;

