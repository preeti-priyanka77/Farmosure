import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__content page-enter">
                <h1 className="not-found__code">404</h1>
                <div className="not-found__divider"></div>
                <h2 className="not-found__title">Lost in the Fields</h2>
                <p className="not-found__text">
                    It seems the path you're looking for has been tucked away behind the barn.
                    Let's get you back to the fresh harvest.
                </p>
                <Link to="/" className="not-found__button">
                    Back to Home
                </Link>
            </div>
            <div className="not-found__background">
                <div className="not-found__leaf not-found__leaf--1"></div>
                <div className="not-found__leaf not-found__leaf--2"></div>
                <div className="not-found__leaf not-found__leaf--3"></div>
            </div>
        </div>
    );
};

export default NotFound;
