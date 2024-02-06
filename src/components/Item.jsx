import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, onAddToCart }) => { 
  const { id, name, description, price, image } = item;

  const handleAddToCart = () => {
    onAddToCart(item); 
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} /> {/* Utiliza la URL de la imagen del producto */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary mr-2">Ver Detalles</Link>
        <button className="btn btn-success" onClick={handleAddToCart}>Añadir al Carro</button>
      </div>
    </div>
  );
};

export default Item;
