import React from "react";

const ServiceCard = ({ service, onSelect }) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button onClick={() => onSelect(service)}>Select</button>
    </div>
  );
};

export default ServiceCard;
