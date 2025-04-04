import React from 'react';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <p className="price">{destination.price}</p>
    </div>
  );
}

export default DestinationCard;
