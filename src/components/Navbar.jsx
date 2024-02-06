import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'; // Importa el componente Cart

const Navbar = () => {
  const products = [
    { id: 1, name: 'Yoda' },
    { id: 2, name: 'Anakin' },
    { id: 3, name: 'Luke' },
    { id: 4, name: 'Darth Vader' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Star Wars Store</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {products.map(product => (
              <li key={product.id} className="nav-item">
                <Link className="nav-link" to={`/item/${product.id}`}>{product.name}</Link>
              </li>
            ))}
            <li className="nav-item">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
