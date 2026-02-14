import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = useCallback((product) => {
        setItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsOpen(true);
    }, []);

    const removeFromCart = useCallback((id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const updateQuantity = useCallback((id, quantity) => {
        if (quantity <= 0) {
            setItems(prev => prev.filter(item => item.id !== id));
            return;
        }
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    }, []);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const clearCart = useCallback(() => setItems([]), []);

    return (
        <CartContext.Provider value={{
            items, isOpen, setIsOpen, addToCart, removeFromCart,
            updateQuantity, totalItems, totalPrice, clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be within CartProvider');
    return ctx;
}
