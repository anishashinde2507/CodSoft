import React from 'react';
import './MostAttractive.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Guided Tours',
      description: 'Explore the beautiful Konkan region with our experienced guides who provide in-depth knowledge of the local culture and history.',
      icon:'🗺️'
    },
    {
      id: 2,
      title: 'Transportation',
      description: 'We offer convenient and comfortable transportation options, including car rentals, airport transfers, and local transit services.',
      icon:'🚗'
    },
    {
      id: 3,
      title: 'Accommodation Booking',
      description: 'Book your stay with us and choose from a range of accommodations, from luxury resorts to cozy homestays.',
      icon: '🏨'
    },
    {
      id: 4,
      title: 'Customized Itineraries',
      description: 'Get personalized travel itineraries tailored to your preferences and interests, ensuring you make the most of your trip.',
      icon: '📋'
    },
    {
      id: 5,
      title: 'Adventure Activities',
      description: 'Indulge in thrilling adventure activities such as trekking, water sports, and wildlife safaris in the picturesque Konkan region.',
      icon: '🌄'
    },
    {
      id: 6,
      title: 'Local Cuisine Experiences',
      description: 'Savor the authentic flavors of Konkan with our curated culinary experiences, including cooking classes and food tours.',
      icon: '🍽️'
    }
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="timeline">
        {services.map(service => (
          <div key={service.id} className="timeline-item">
            <div className="timeline-icon">{service.icon}</div>
            <div className="timeline-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
