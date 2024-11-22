import React, { useState, useEffect } from "react";
import ServiceCard from "C:/Users/LENOVO/Desktop/web-shop sep/webshop-frontend/src/components/ServiceCard/ServiceCard";
import { getAllServices } from "C:/Users/LENOVO/Desktop/web-shop sep/webshop-frontend/src/services/ServiceApi";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      const fetchedServices = await getAllServices();
      setServices(fetchedServices);
    };
    fetchServices();
  }, []);

  const handleSelectService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );
  };

  const goToCheckout = () => {
    navigate("/checkout", { state: { selectedServices } });
  };

  return (
    <div>
      <h1>Available Services</h1>
      <div className="service-list">
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={handleSelectService}
            />
          ))
        )}
      </div>
      <h2>Total: ${calculateTotal()}</h2>
      <button onClick={goToCheckout}>Go to Checkout</button> {}
    </div>
  );
};

export default HomePage;
