import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = id => e => {
	e.preventDefault();
   const newCart = cart.filter((item) => {
     return item.id !== id; 
	});
	setCart(newCart);
  };

  return (
      <div className="App">
    <ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{cart,setCart,removeFromCart}}>
        <Navigation />

        {/* Routes */}
        <Route
          exact
          path="/"
          component={Products}
        />

        <Route path="/cart" component={ShoppingCart} />
		</CartContext.Provider>
    </ProductContext.Provider>
      </div>
  );
}

export default App;
