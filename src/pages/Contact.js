import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ firstName: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        setForm({ firstName: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="page-enter">
            {/* Header */}
            <div className="contact-header container">
                <h1>Get In Touch</h1>
                <p>Have questions about our products, quality standards, or delivery? We're here to help.</p>
            </div>

            {/* Info Cards */}
            <div className="contact-info-strip">
                <div className="contact-info-strip__inner">
                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div className="contact-info-card__title">Email Us</div>
                        <div className="contact-info-card__value">hello@farmosure.com</div>
                        <div className="contact-info-card__sub">We typically respond within 24 hours</div>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div className="contact-info-card__title">Call Us</div>
                        <div className="contact-info-card__value">+91 123 456 7890</div>
                        <div className="contact-info-card__sub">Mon–Sat, 9 AM to 7 PM</div>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div className="contact-info-card__title">We Serve</div>
                        <div className="contact-info-card__value">Delhi NCR, Mumbai, Bangalore</div>
                        <div className="contact-info-card__sub">Expanding to more cities soon</div>
                    </div>

                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="contact-info-card__title">Delivery Hours</div>
                        <div className="contact-info-card__value">Daily, 6 AM to 10 PM</div>
                        <div className="contact-info-card__sub">Same-day delivery available</div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <ScrollReveal>
                <div className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form__row">
                            <div className="contact-form__group">
                                <label className="contact-form__label">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="contact-form__input"
                                    placeholder="Jane"
                                    required
                                />
                            </div>
                            <div className="contact-form__group">
                                <label className="contact-form__label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="contact-form__input"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="contact-form__group">
                            <label className="contact-form__label">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="contact-form__input"
                                placeholder="+91"
                            />
                        </div>
                        <div className="contact-form__group">
                            <label className="contact-form__label">Your message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="contact-form__textarea"
                                placeholder="Tell us how can we help you...."
                                required
                            />
                        </div>
                        <button type="submit" className="contact-form__submit">Submit</button>
                    </form>
                </div>
            </ScrollReveal>
        </div>
    );
}
