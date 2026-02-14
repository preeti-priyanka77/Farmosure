import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = useCallback((email, password) => {
        setIsLoading(true);
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password.length >= 6) {
                    const userData = {
                        id: '1',
                        name: email.split('@')[0],
                        email,
                        avatar: email.charAt(0).toUpperCase(),
                    };
                    setUser(userData);
                    setIsLoading(false);
                    resolve(userData);
                } else {
                    setIsLoading(false);
                    reject(new Error('Invalid credentials'));
                }
            }, 1200);
        });
    }, []);

    const signup = useCallback((name, email, password) => {
        setIsLoading(true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (name && email && password.length >= 6) {
                    const userData = { id: '1', name, email, avatar: name.charAt(0).toUpperCase() };
                    setUser(userData);
                    setIsLoading(false);
                    resolve(userData);
                } else {
                    setIsLoading(false);
                    reject(new Error('Please fill all fields correctly'));
                }
            }, 1200);
        });
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, login, signup, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be within AuthProvider');
    return ctx;
}
