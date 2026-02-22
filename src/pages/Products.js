import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import CategoryCard from '../components/CategoryCard';
import CTAButton from '../components/CTAButton';
import './Products.css';

const FILTER_CATEGORIES = ['All', 'Chicken', 'Mutton', 'Sea Food', 'Fish', 'Ready to Cook'];

const ALL_PRODUCTS = [
    { id: 'p1', name: 'Country Eggs', category: 'Chicken', image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=600&h=750&fit=crop' },
    { id: 'p2', name: 'Whole Chicken', category: 'Chicken', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=750&fit=crop' },
    { id: 'p3', name: 'Chicken Breast', category: 'Chicken', image: 'https://images.unsplash.com/photo-1642497394469-188b0f4bcae6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p4', name: 'Boneless Chicken', category: 'Chicken', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=750&fit=crop' },
    { id: 'p5', name: 'Mutton Curry Cut', category: 'Mutton', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&h=750&fit=crop' },
    { id: 'p6', name: 'Mutton Keema', category: 'Mutton', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&h=750&fit=crop' },
    { id: 'p7', name: 'Fresh Rohu', category: 'Fish', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=750&fit=crop' },
    { id: 'p8', name: 'Pomfret', category: 'Fish', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&h=750&fit=crop' },
    { id: 'p9', name: 'Tiger Prawns', category: 'Sea Food', image: 'https://plus.unsplash.com/premium_photo-1707581570181-a60b7eec7888?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p10', name: 'Crab Whole', category: 'Sea Food', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=750&fit=crop' },
    { id: 'p11', name: 'Chicken Tikka', category: 'Ready to Cook', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjB0aWtrYSd8ZW58MHx8MHx8fDA%3D' },
    { id: 'p12', name: 'Seekh Kebab', category: 'Ready to Cook', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=750&fit=crop' },
];

export default function Products() {
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

    return (
        <div className="page-enter">
            {/* Header */}
            <div className="products-header container">

                <h1>Product Showcase</h1>
                <p>A curated collection of our finest farm-fresh offerings, processed with precision and care.</p>
            </div>

            {/* Filter Pills */}
            <div className="products-filters">
                {FILTER_CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`products-filter-pill ${active !== cat ? 'products-filter-pill--inactive' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="products-grid">
                {filtered.map((product, i) => (
                    <ScrollReveal key={product.id + active} delay={i * 60}>
                        <CategoryCard
                            name={product.name}
                            image={product.image}
                            variant="showcase"
                            to="/products"
                        />
                    </ScrollReveal>
                ))}
            </div>

            {/* CTA Block */}
            <ScrollReveal>
                <div className="products-cta">
                    <h2>Interested in our Sourcing?</h2>
                    <p>We pride ourselves on the quality and ethics of our supply chain. For business inquiries or custom orders, please get in touch.</p>
                    <CTAButton label="Inquire Now" to="/contact" />
                </div>
            </ScrollReveal>
        </div>
    );
}
