import React from 'react';
import Item from './Item';

const ItemListContainer = ({ greeting, category, onAddToCart }) => {
  const mockProducts = [
    {
        id: 1,
        name: 'Yoda Hot Toys',
        description: 'Figura Hot Toys de Yoda de Star Wars.',
        price: 250000,
        category: 'yoda',
        image: 'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/903656/yoda_star-wars_gallery_5c4c2b119065a.jpg' 
    },
    {
      id: 2,
      name: 'Anakin Hot Toys',
      description: 'Figura Hot Toys de Anakin Skywalker de Star Wars.',
      price: 280000,
      category: 'anakin',
      image: 'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912537/anakin-skywalker-artisan-edition_star-wars_gallery_64c4173f0e14e.jpg'
    },
    {
      id: 3,
      name: 'Luke Hot Toys',
      description: 'Figura Hot Toys de Luke Skywalker de Star Wars.',
      price: 270000,
      category: 'luke',
      image: 'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/9090471/luke-skywalker-special-edition_star-wars_gallery_6108479f8966e.jpg'
    },
    {
      id: 4,
      name: 'Darth Vader Hot Toys',
      description: 'Figura Hot Toys de Darth Vader de Star Wars.',
      price: 300000,
      category: 'darthvader',
      image: 'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/9122322/darth-vader-deluxe-version-return-of-the-jedi-40th-anniversary-collection_star-wars_gallery_642ef52a1b49a.jpg'
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Productos Destacados</h2>
      <p className="lead text-center">{greeting}</p>
      <div className="row">
        {mockProducts.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <Item item={product} onAddToCart={onAddToCart} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
