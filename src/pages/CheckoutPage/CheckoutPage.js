import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { selectedServices } = location.state || {};
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    const totalPrice = selectedServices?.reduce(
      (total, service) => total + service.price,
      0
    );
    const port = 5000; // Ovo bi trebalo biti odabrano ili dinamički određeno

    try {
      const response = await fetch(
        "http://localhost:8080/api/psp/payment-options",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalPrice, port }), // Pošaljite i port zajedno sa totalPrice
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Payment options:", data);

      // Redirektovanje na drugi front sa portom i cenom u query parametrima
      const targetUrl = `http://localhost:3001?port=${port}&totalPrice=${totalPrice}`;
      window.location.href = targetUrl; // Prelazak na drugi frontend
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <h2>Your Selected Services</h2>
      <ul>
        {selectedServices ? (
          selectedServices.map((service) => (
            <li key={service.id}>
              {service.name} - ${service.price}
            </li>
          ))
        ) : (
          <p>No services selected</p>
        )}
      </ul>
      <h3>
        Total: $
        {selectedServices?.reduce((total, service) => total + service.price, 0)}
      </h3>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
