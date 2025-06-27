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
                {/* Admin Routes - No Header/Footer */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ProductManager />} />
                
                {/* Public Routes with Header and Footer */}
                <Route path="/" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <Home />
                    </main>
                    <Footer />
                  </>
                } />
                
                <Route path="/shop" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <Shop />
                    </main>
                    <Footer />
                  </>
                } />
                
                <Route path="/product/:id" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <ProductDetail />
                    </main>
                    <Footer />
                  </>
                } />
                
                <Route path="/cart" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <Cart />
                    </main>
                    <Footer />
                  </>
                } />
                
                <Route path="/about" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <About />
                    </main>
                    <Footer />
                  </>
                } />
                
                <Route path="/contact" element={
                  <>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1">
                      <Contact />
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