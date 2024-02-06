import React, { useState, useEffect } from 'react';

const ItemDetailContainer = ({ match, onAddToCart }) => {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  // Mock de productos
  const mockProducts = [
    {
      id: 1,
      name: 'Yoda Hot Toys',
      description: 'Figura Hot Toys de Yoda de Star Wars.',
      price: 250000,
      category: 'yoda',
    },
    {
        id: 2,
        name: 'Anakin Hot Toys',
        description: 'Figura Hot Toys de Anakin Skywalker de Star Wars.',
        price: 280000,
        category: 'anakin',
      },
      {
        id: 3,
        name: 'Luke Hot Toys',
        description: 'Figura Hot Toys de Luke Skywalker de Star Wars.',
        price: 270000,
        category: 'luke',
      },
      {
        id: 4,
        name: 'Darth Vader Hot Toys',
        description: 'Figura Hot Toys de Darth Vader de Star Wars.',
        price: 300000,
        category: 'darthvader',
      },
  ];

  useEffect(() => {
    // Buscar el producto por ID
    const selectedProduct = mockProducts.find(product => product.id === parseInt(id, 10));

    // Simular una llamada a una API o carga asíncrona
    setTimeout(() => {
      setProduct(selectedProduct);
    }, 1000);
  }, [id]); // Se ejecuta cuando cambia el ID

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="container mt-4">
      <h2>Detalles del Producto</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>ID del Producto: {product.id}</p>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-success" onClick={handleAddToCart}>Añadir al Carro</button>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
