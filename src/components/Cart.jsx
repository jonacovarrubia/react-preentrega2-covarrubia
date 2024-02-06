import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]); // Estado para almacenar los elementos del carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setItems([...items, product]);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-outline-light dropdown-toggle" type="button" id="cartDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Cart ({items.length})
      </button>
      <ul className="dropdown-menu" aria-labelledby="cartDropdown">
        {items.length === 0 ? (
          <li><span className="dropdown-item">Your cart is empty</span></li>
        ) : (
          items.map((item, index) => (
            <li key={index}><span className="dropdown-item">{item.name}</span></li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
