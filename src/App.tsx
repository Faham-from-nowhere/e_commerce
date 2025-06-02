import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import FeaturedPage from './pages/FeaturedPage';

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/featured" element={<FeaturedPage />} />
                <Route path="*" element={<div className="text-center py-20"><h1 className="text-2xl">Page Not Found</h1></div>} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;