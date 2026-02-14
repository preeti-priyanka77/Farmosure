import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
    const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

    return (
        <>
            {/* Overlay */}
            <div
                className={`cart-overlay ${isOpen ? 'cart-overlay--open' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
                <div className="cart-drawer__header">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="cart-drawer__title">Your Cart</span>
                        {totalItems > 0 && <span className="cart-drawer__count">{totalItems}</span>}
                    </div>
                    <button className="cart-drawer__close" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-drawer__empty">
                        <div className="cart-drawer__empty-icon">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                            </svg>
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>Explore our products and add fresh farm produce</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-drawer__items">
                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item__image" />
                                    <div className="cart-item__info">
                                        <div className="cart-item__name">{item.name}</div>
                                        <div className="cart-item__price">₹{item.price}</div>
                                        <div className="cart-item__controls">
                                            <button className="cart-item__qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                                            <span className="cart-item__qty">{item.quantity}</span>
                                            <button className="cart-item__qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>
                                        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-drawer__footer">
                            <div className="cart-drawer__total">
                                <span className="cart-drawer__total-label">Total</span>
                                <span className="cart-drawer__total-price">₹{totalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <button className="cart-drawer__checkout">Proceed to Checkout</button>
                            <button className="cart-drawer__clear" onClick={clearCart}>Clear Cart</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
