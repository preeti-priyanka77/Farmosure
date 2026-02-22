import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

import NotFound from './pages/NotFound';
import PaymentRequired from './pages/PaymentRequired';
import './App.css';
import './animations.css'; // Import extra animations

function App() {
  return (
    <Router>

      <WishlistProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <main className="app__main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/payment-required" element={<PaymentRequired />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </WishlistProvider>

    </Router>
  );
}

export default App;
