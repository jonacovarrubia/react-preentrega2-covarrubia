import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" render={(props) => <ItemListContainer {...props} onAddToCart={addToCart} />} />
          <Route path="/item/:id" render={(props) => <ItemDetailContainer {...props} onAddToCart={addToCart} />} />
        </Switch>
        <Cart items={cartItems} /> {/* Asegúrate de pasar el estado cartItems como una prop llamada items al componente Cart */}
      </div>
    </Router>
  );
};

export default App;
