import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';
import './HeaderExt.css';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'About Us', to: '/about' },
    { label: 'Quality', to: '/quality' },
    { label: 'Contact', to: '/contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const { setIsOpen: openCart, totalItems: cartCount } = useCart();
    const { totalItems: wishlistCount } = useWishlist();
    const { user, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
                <div className="header__inner">
                    <button
                        className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>

                    <Link to="/" className="header__logo">
                        <div className="header__logo-icon">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4C20 4 32 10 32 22C32 28.627 26.627 34 20 34C13.373 34 8 28.627 8 22C8 10 20 4 20 4Z" fill="#6FB98F" fillOpacity="0.2" stroke="#1F4D3A" strokeWidth="1.5" />
                                <path d="M20 12V28" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M20 18C23 16 26 17 27 19" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                <path d="M20 22C17 20 14 21 13 23" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            </svg>
                        </div>
                        <span className="header__logo-text">Farmosure</span>
                    </Link>

                    <nav className="header__nav">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`header__nav-link ${location.pathname === link.to ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="header__icons">
                        {/* Wishlist */}
                        <Link to="/products" className="header__icon-btn" aria-label="Wishlist">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                            {wishlistCount > 0 && <span className="header__badge">{wishlistCount}</span>}
                        </Link>

                        {/* Cart */}
                        <button className="header__icon-btn" onClick={() => openCart()} aria-label="Cart">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                            </svg>
                            {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
                        </button>

                        {/* User */}
                        {isAuthenticated ? (
                            <div className="header__user" onClick={logout} title="Click to logout">
                                <div className="header__avatar">{user.avatar}</div>
                                <span className="header__username">{user.name}</span>
                            </div>
                        ) : (
                            <Link to="/login" className="header__login">Log In</Link>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
                {NAV_LINKS.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`header__nav-link ${location.pathname === link.to ? 'active' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    <Link to="/products" className="header__icon-btn" aria-label="Wishlist">
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        {wishlistCount > 0 && <span className="header__badge">{wishlistCount}</span>}
                    </Link>
                    <button className="header__icon-btn" onClick={() => { openCart(); setMenuOpen(false); }} aria-label="Cart">
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                        {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
                    </button>
                </div>
                {isAuthenticated ? (
                    <button className="header__login" onClick={logout}>Log Out ({user.name})</button>
                ) : (
                    <Link to="/login" className="header__login">Log In</Link>
                )}
            </div>

            <div className="header-spacer" />
        </>
    );
}
