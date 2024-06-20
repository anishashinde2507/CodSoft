import React from 'react';
import './Viewpoint.css';
import Alibaug from "../assets/Alibaug.jpg";
import M3 from "../assets/M3.jpg";
import Ratnagiri from "../assets/Ratnagiri.jpg";
import Mahad from "../assets/Mahad.jpg";
import Sindhudurg from "../assets/M1.jpg";
import Murud from "../assets/Mrud.jpg"


const Viewpoint = () => {
  const places = [
    { id: 1, name: 'Alibaug', image: Alibaug, description: 'Known for its beaches and forts.' },
    { id: 2, name: 'M3', image: M3, description: 'Famous for its serene beaches and Swayambhu Ganpati Temple.' },
    { id: 3, name: 'Ratnagiri', image: Ratnagiri, description: 'Port city known for Alphonso mangoes and historical monuments.' },
    { id: 4, name: 'Mahad', image: Mahad, description: 'Long stretch of beaches and dolphin sightings.' },
    { id: 5, name: 'Sindhudurg', image: Sindhudurg, description: 'Famous for its fort and scenic beaches.' },
    { id: 6, name: 'Murud', image: Murud, description: 'Known for its fort situated on an island.' },
  ];

  return (
    <section className="viewpoint">
      <h2>Viewpoint</h2>
      <div className="places-grid">
        {places.map(place => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Viewpoint;
