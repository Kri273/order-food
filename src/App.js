import Header from "./components/Header"
import Meals from "./components/Meals"
import React from "react";
import { CartProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";

const App = () => {
 return (
    <CartProvider>
    <Header />
     <Meals />
     <Modal />
    </CartProvider>
  );
}

export default App;
