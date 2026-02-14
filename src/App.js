import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';
import './animations.css'; // Import extra animations

function App() {
  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <div className="app">
              <Header />
              <CartDrawer />
              <main className="app__main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/quality" element={<Quality />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
