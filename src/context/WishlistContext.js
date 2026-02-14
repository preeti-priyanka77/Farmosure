import { createContext, useContext, useState, useCallback } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [items, setItems] = useState([]);

    const toggleWishlist = useCallback((product) => {
        setItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev.filter(item => item.id !== product.id);
            return [...prev, product];
        });
    }, []);

    const isWishlisted = useCallback((id) => {
        return items.some(item => item.id === id);
    }, [items]);

    const totalItems = items.length;

    return (
        <WishlistContext.Provider value={{ items, toggleWishlist, isWishlisted, totalItems }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error('useWishlist must be within WishlistProvider');
    return ctx;
}
