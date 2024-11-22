// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";

// const Cart = ({ selectedServices }) => {
//   const navigate = useNavigate();

//   const goToCheckout = () => {
//     console.log("Navigating to checkout...");
//     navigate("/checkout", { state: { selectedServices } });
//   };

//   return (
//     <div className="cart">
//       <h1>Your Cart</h1>
//       <ul>
//         {selectedServices.map((service) => (
//           <li key={service.id}>
//             {service.name} - ${service.price}
//           </li>
//         ))}
//       </ul>
//       <h2>
//         Total: $
//         {selectedServices.reduce((total, service) => total + service.price, 0)}
//       </h2>
//       <button onClick={goToCheckout}>Proceed to Checkout</button>
//       {/* Dugme za checkout */}
//     </div>
//   );
// };

// export default Cart;
