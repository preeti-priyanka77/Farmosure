import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './CategoryCard.css';

export default function CategoryCard({ id, name, image, to = '/products', variant = '', price, weight }) {
    const { addToCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();
    const [justAdded, setJustAdded] = useState(false);

    const wishlisted = id ? isWishlisted(id) : false;
    const showShop = !!price;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!id) return;
        addToCart({ id, name, image, price });
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1200);
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!id) return;
        toggleWishlist({ id, name, image, price });
    };

    return (
        <Link to={to} className={`category-card ${variant ? `category-card--${variant}` : ''}`}>
            <div className="category-card__image-wrapper">
                <img src={image} alt={name} className="category-card__image" loading="lazy" />

                {showShop && (
                    <button
                        className={`category-card__wishlist ${wishlisted ? 'category-card__wishlist--active' : ''}`}
                        onClick={handleWishlist}
                        aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                    </button>
                )}
            </div>

            <div className="category-card__content">
                <div className="category-card__name">{name}</div>

                {showShop && (
                    <div className="category-card__price-row">
                        <div>
                            <span className="category-card__price">₹{price}</span>
                            {weight && <span className="category-card__weight">/ {weight}</span>}
                        </div>
                        <button
                            className={`category-card__add-btn ${justAdded ? 'category-card__add-btn--added' : ''}`}
                            onClick={handleAddToCart}
                        >
                            {justAdded ? (
                                <>
                                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                                    Added
                                </>
                            ) : (
                                <>
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                                    </svg>
                                    Add
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </Link>
    );
}
