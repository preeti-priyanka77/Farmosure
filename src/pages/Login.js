import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
    const [tab, setTab] = useState('login');
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const { login, signup, isLoading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (tab === 'login') {
                await login(form.email, form.password);
            } else {
                await signup(form.name, form.email, form.password);
            }
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-page page-enter">
            <div className="login-card">
                <div className="login-card__logo">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4C20 4 32 10 32 22C32 28.627 26.627 34 20 34C13.373 34 8 28.627 8 22C8 10 20 4 20 4Z" fill="#6FB98F" fillOpacity="0.2" stroke="#1F4D3A" strokeWidth="1.5" />
                        <path d="M20 12V28" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M20 18C23 16 26 17 27 19" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <path d="M20 22C17 20 14 21 13 23" stroke="#1F4D3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                    <span className="login-card__logo-text">Farmosure</span>
                </div>

                <h2 className="login-card__title">{tab === 'login' ? 'Welcome Back' : 'Join Farmosure'}</h2>
                <p className="login-card__subtitle">
                    {tab === 'login' ? 'Sign in to your account to continue' : 'Create an account to get started'}
                </p>

                {/* Tabs */}
                <div className="login-tabs">
                    <button className={`login-tab ${tab === 'login' ? 'login-tab--active' : ''}`} onClick={() => { setTab('login'); setError(''); }}>Log In</button>
                    <button className={`login-tab ${tab === 'signup' ? 'login-tab--active' : ''}`} onClick={() => { setTab('signup'); setError(''); }}>Sign Up</button>
                </div>

                {error && <div className="login-error">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    {tab === 'signup' && (
                        <div className="login-field">
                            <label className="login-field__label">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="login-field__input"
                                placeholder="Your full name"
                                required
                            />
                        </div>
                    )}

                    <div className="login-field">
                        <label className="login-field__label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="login-field__input"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label className="login-field__label">Password</label>
                        <input
                            type={showPw ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="login-field__input"
                            placeholder="Min. 6 characters"
                            minLength={6}
                            required
                        />
                        <button type="button" className="login-field__toggle-pw" onClick={() => setShowPw(!showPw)}>
                            {showPw ? (
                                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                                    <line x1="1" y1="1" x2="23" y2="23" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <button type="submit" className="login-submit" disabled={isLoading}>
                        {isLoading && <span className="login-spinner" />}
                        {isLoading ? (tab === 'login' ? 'Signing in...' : 'Creating account...') : (tab === 'login' ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div className="login-benefits">
                    <div className="login-benefit">
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Secure
                    </div>
                    <div className="login-benefit">
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        Verified
                    </div>
                    <div className="login-benefit">
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5M2 12h20" /></svg>
                        Fresh
                    </div>
                </div>
            </div>
        </div>
    );
}
