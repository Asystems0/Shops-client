import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import store from "./state/store";

import "./App.css";

import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import Footer from "./components/Footer";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="grid-container">
          <Navbar />
          <main className="main">
            <div className="content">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/shipping" element={<ShippingScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/placeoreder" element={<PlaceOrderScreen />} />
                <Route path="/products" element={<ProductsScreen />} />
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/cart/:id" element={<CartScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
