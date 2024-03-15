import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ closeNavbar }) { // Accepting a prop to close the navbar
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavExpanded(false); // Close the navbar when a link is clicked
    if(closeNavbar) closeNavbar(); // Additional precaution if you decide to pass a close function
  }

  return (
    <>
    <div className='menu-button'>
        <button className="btn btn-primary hamburger-btn" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        </button>
    </div>
      <div className={`sidebar bg-light ${isNavExpanded ? 'expanded' : 'collapsed'}`} style={{width: isNavExpanded ? '250px' : '0', transition: '0.3s'}}>
        <a href="#" className="closebtn" onClick={() => setIsNavExpanded(false)}>&times;</a>
        {/* Use handleNavLinkClick to close navbar on click */}
        <Link to="/Pages/Homepages.js" onClick={handleNavLinkClick}>Homepage</Link>
        <Link to="/Pages/Services.js" onClick={handleNavLinkClick}>Services</Link>
        <Link to="/Pages/Technicians.js" onClick={handleNavLinkClick}>Technicians</Link>
        <Link to="/Pages/AboutUs.js" onClick={handleNavLinkClick}>About Us</Link>
      </div>
    </>
  );
}

export default Navbar;


