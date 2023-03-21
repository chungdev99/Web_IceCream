import React from 'react';
import { Route, Routes } from "react-router-dom";
import LayoutHome from './components';
import Header from './components/Header/Header';
import Cart from './features/Cart';
import ProductList from './features/Product';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LayoutHome />} />
        <Route path="product/*" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>

  );
}

export default App;
