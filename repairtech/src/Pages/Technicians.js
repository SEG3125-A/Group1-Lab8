import React from 'react';
import tech1image from '../images/Technician1.jpg'
import tech2image from '../images/Technician2.jpg'
import tech3image from '../images/Technician3.jpg'

function Technicians() {
  
  const technicians = [
    {
      id: 1,
      name: 'Walter W.',
      description: 'Sr. Technician',
      imageUrl: tech1image
    },
    {
      id: 2,
      name: 'Jesse P.',
      description: 'Jr technician',
      imageUrl: tech2image
    },
    {
      id: 3,
      name: 'Saul G.',
      description: 'Apprentice',
      imageUrl: tech3image
    },
  ];

  return(
    <div className='about-us-container'>
      <h1 className="header">Meet Our Technicians</h1>
      <div className="technicians-container">
        {technicians.map((tech) => (
          <div key={tech.id} className="technician">
            <img src={tech.imageUrl} alt={tech.name} className="technician-image" />
            <h3>{tech.name}</h3>
            <p className='technician-description'>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technicians;