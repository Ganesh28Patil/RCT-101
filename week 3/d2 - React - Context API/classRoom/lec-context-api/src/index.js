import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
// import { CartProvider } from './conetext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <CartProvider> */}
    <App2 />
    {/* </CartProvider> */}

  </React.StrictMode>
);


