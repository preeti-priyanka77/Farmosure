import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentRequired.css';

const PaymentRequired = () => {
    return (
        <div className="payment-required">
            <div className="payment-required__content page-enter">
                <div className="payment-required__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                </div>
                <h1 className="payment-required__code">402</h1>
                <h2 className="payment-required__title">Subscription Required</h2>
                <p className="payment-required__text">
                    Our finest harvests are reserved for our valued members.
                    Please complete your subscription to access this exclusive farm-to-fork experience.
                </p>
                <div className="payment-required__actions">
                    <Link to="/pricing" className="payment-required__button payment-required__button--primary">
                        View Plans
                    </Link>
                    <Link to="/" className="payment-required__button payment-required__button--secondary">
                        Return Home
                    </Link>
                </div>
            </div>
            <div className="payment-required__overlay"></div>
        </div>
    );
};

export default PaymentRequired;
