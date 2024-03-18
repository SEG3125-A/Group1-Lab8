// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  // Update the page title whenever the location changes
  useEffect(() => {
    switch (location.pathname) {
      case '/Pages/Homepages.js':
      case '/':
        setPageTitle('Homepage');
        break;
      case '/Pages/Services.js':
        setPageTitle('Services');
        break;
      case '/Pages/Technicians.js':
        setPageTitle('Technicians');
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
      <div className="title-band">
        <h1 className="page-title">{pageTitle}</h1>
      </div>
      <div className='menu-button'>
          {/* Your hamburger button code here */}
      </div>
      <div className={`sidebar bg-light`}>
        <a href="#" className="closebtn">&times;</a>
        {/* Use handleNavLinkClick to close navbar on click */}
        <Link to="/Pages/Homepages.js">Homepage</Link>
        <Link to="/Pages/Services.js">Services</Link>
        <Link to="/Pages/Technicians.js">Technicians</Link>
        <Link to="/Pages/AboutUs.js">About Us</Link>
      </div>
    </>
  );
}

export default Navbar;
