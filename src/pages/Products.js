import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import CategoryCard from '../components/CategoryCard';
import CTAButton from '../components/CTAButton';
import './Products.css';

const FILTER_CATEGORIES = ['All', 'Chicken', 'Mutton', 'Sea Food', 'Fish', 'Ready to Cook'];

const ALL_PRODUCTS = [
    { id: 'p1', name: 'Country Eggs (6 pcs)', category: 'Chicken', price: 72, weight: '6 pcs', image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=400&h=500&fit=crop' },
    { id: 'p2', name: 'Whole Chicken', category: 'Chicken', price: 329, weight: '900g–1.1kg', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=500&fit=crop' },
    { id: 'p3', name: 'Chicken Breast', category: 'Chicken', price: 249, weight: '500g', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82571?w=400&h=500&fit=crop' },
    { id: 'p4', name: 'Boneless Chicken', category: 'Chicken', price: 289, weight: '500g', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=500&fit=crop' },
    { id: 'p5', name: 'Mutton Curry Cut', category: 'Mutton', price: 599, weight: '500g', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=500&fit=crop' },
    { id: 'p6', name: 'Mutton Keema', category: 'Mutton', price: 549, weight: '500g', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&h=500&fit=crop' },
    { id: 'p7', name: 'Fresh Rohu', category: 'Fish', price: 219, weight: '500g', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop' },
    { id: 'p8', name: 'Pomfret', category: 'Fish', price: 449, weight: '1 pc', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=500&fit=crop' },
    { id: 'p9', name: 'Tiger Prawns', category: 'Sea Food', price: 499, weight: '500g', image: 'https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=400&h=500&fit=crop' },
    { id: 'p10', name: 'Crab Whole', category: 'Sea Food', price: 579, weight: '1 pc', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=500&fit=crop' },
    { id: 'p11', name: 'Chicken Tikka', category: 'Ready to Cook', price: 299, weight: '250g', image: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d863?w=400&h=500&fit=crop' },
    { id: 'p12', name: 'Seekh Kebab', category: 'Ready to Cook', price: 329, weight: '250g', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=500&fit=crop' },
];

export default function Products() {
    const [active, setActive] = useState('All');

    const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

    return (
        <div className="page-enter">
            {/* Header */}
            <div className="products-header container">
                <h1>Our Products</h1>
                <p>Browse our selection of premium, farm-fresh products</p>
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
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            weight={product.weight}
                            variant="product"
                            to="/products"
                        />
                    </ScrollReveal>
                ))}
            </div>

            {/* CTA Block */}
            <ScrollReveal>
                <div className="products-cta">
                    <h2>Can't Find What You're Looking For?</h2>
                    <p>We're constantly expanding our range. Get in touch with us for special requests or bulk orders.</p>
                    <CTAButton label="Contact Us" to="/contact" />
                </div>
            </ScrollReveal>
        </div>
    );
}
