import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import { CustomerProvider } from './context/CustomerContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import UnifiedLogin from './pages/UnifiedLogin';
import CustomerAccount from './pages/CustomerAccount';
import OrderDetail from './pages/OrderDetail';
import AdminDashboard from './pages/AdminDashboard';
import ProductManager from './pages/ProductManager';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminProvider>
      <CustomerProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen flex overflow-hidden">
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

              <div className="flex-1 flex flex-col">
                <Routes>
                  {/* Admin Routes - No Header/Footer */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/products" element={<ProductManager />} />
                  
                  {/* Unified Login Route - No Header/Footer */}
                  <Route path="/login" element={<UnifiedLogin />} />
                  <Route path="/signin" element={<UnifiedLogin />} />
                  <Route path="/register" element={<UnifiedLogin />} />
                  <Route path="/signup" element={<UnifiedLogin />} />
                  
                  {/* Customer Account Routes - No Header/Footer */}
                  <Route path="/account" element={<CustomerAccount />} />
                  <Route path="/account/orders/:orderId" element={<OrderDetail />} />
                  <Route path="/profile" element={<CustomerAccount />} />
                  <Route path="/my-account" element={<CustomerAccount />} />
                  
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
                  
                  <Route path="/home" element={
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
                  
                  <Route path="/products" element={
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
                  
                  <Route path="/products/:id" element={
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
                  
                  <Route path="/shopping-cart" element={
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
                  
                  <Route path="/about-us" element={
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
                  
                  <Route path="/contact-us" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <Contact />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  {/* Additional common routes */}
                  <Route path="/privacy" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Privacy Policy" 
                          message="Our privacy policy page is coming soon. We take your privacy seriously and will have detailed information available shortly."
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/terms" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Terms of Service" 
                          message="Our terms of service page is coming soon. Please check back later for our complete terms and conditions."
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/returns" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Returns & Exchanges" 
                          message="Our returns and exchanges page is coming soon. For immediate assistance, please contact our support team."
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/shipping" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Shipping Information" 
                          message="Detailed shipping information is coming soon. We offer free shipping on orders over $75!"
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/size-guide" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Size Guide" 
                          message="Our comprehensive size guide is coming soon. For sizing questions, please contact our support team."
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/warranty" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Warranty Information" 
                          message="Our warranty information page is coming soon. All RICH-U-ALS products come with our lifetime craftsmanship guarantee."
                          showBackButton={true}
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  <Route path="/forgot-password" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound 
                          title="Password Reset" 
                          message="Password reset functionality is coming soon. Please contact support for assistance with your account."
                          showBackButton={true}
                          backTo="/login"
                        />
                      </main>
                      <Footer />
                    </>
                  } />
                  
                  {/* Catch-all route for 404 - Must be last */}
                  <Route path="*" element={
                    <>
                      <Header onMenuClick={() => setSidebarOpen(true)} />
                      <main className="flex-1">
                        <NotFound />
                      </main>
                      <Footer />
                    </>
                  } />
                </Routes>
              </div>
            </div>
          </Router>
        </CartProvider>
      </CustomerProvider>
    </AdminProvider>
  );
};

export default App;