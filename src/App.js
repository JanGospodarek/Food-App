import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [visibleCart, setVisibleCart] = useState(false);
  function showCartHandler() {
    setVisibleCart(true);
  }
  function hideCartHandler() {
    setVisibleCart(false);
  }
  return (
    <CartProvider>
      {visibleCart && <Cart hideCartHandler={hideCartHandler}></Cart>}
      <Header showCartHandler={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
