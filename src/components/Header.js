import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'About Us', to: '/about' },
    { label: 'Quality', to: '/quality' },
    { label: 'Contact', to: '/contact' },
];

const SOCIAL_LINKS = [
    {
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        )
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        )
    }
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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

                    <div className="header__right">
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

                        <div className="header__socials">
                            {SOCIAL_LINKS.map(social => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="header__social-link"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <button
                            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
                <div className="header__mobile-inner">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`header__nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="header__mobile-socials">
                        {SOCIAL_LINKS.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header__social-link"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="header-spacer" />
        </>
    );
}
