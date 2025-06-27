import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProductManager from './pages/ProductManager';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex overflow-hidden">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col">
              <Routes>
                {/* Admin Routes - These need to be first to avoid conflicts */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ProductManager />} />
                
                {/* Public Routes with Header and Footer */}
                <Route path="/*" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                } />
              </Routes>
            </div>
          </div>
        </Router>
      </CartProvider>
    </AdminProvider>
  );
};

export default App;