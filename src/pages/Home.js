import ScrollReveal from '../components/ScrollReveal';
import CTAButton from '../components/CTAButton';
import CategoryCard from '../components/CategoryCard';
import IconFeatureBlock from '../components/IconFeatureBlock';
import './Home.css';

const CATEGORIES = [
    { name: 'Chicken', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop' },
    { name: 'Mutton', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=400&fit=crop' },
    { name: 'Fish', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop' },
    { name: 'Seafood', image: 'https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=400&h=400&fit=crop' },
    { name: 'Ready to Cook', image: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d863?w=400&h=400&fit=crop' },
];

const GALLERY = [
    'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&h=200&fit=crop',
];

/* SVG Icons */
const FarmIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
);

const ColdChainIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5M2 12h20" />
    </svg>
);

const HygieneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21h10M12 3C7.03 3 3 7.03 3 12h18c0-4.97-4.03-9-9-9zM5 17l1-5h12l1 5" />
    </svg>
);

const QualityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const TruckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 4v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const LeafIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
    </svg>
);

export default function Home() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="home-hero">
                <div className="home-hero__inner">
                    <div className="home-hero__content">
                        <div className="home-hero__tag">
                            <span>🌿</span> Premium Farm-to-Fork
                        </div>
                        <h1 className="home-hero__title">
                            Farm-to-Fork<br />Freshness Assured
                        </h1>
                        <p className="home-hero__subtitle">
                            Sourced directly from trusted farms, processed with the highest hygiene standards, and delivered fresh to your doorstep. Because your family deserves the best.
                        </p>
                        <div className="home-hero__cta">
                            <CTAButton label="Explore Fresh Cuts" to="/products" />
                        </div>
                    </div>
                    <div className="home-hero__image-area">
                        <img
                            src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&h=750&fit=crop"
                            alt="Fresh farm produce"
                            className="home-hero__image-main"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=225&fit=crop"
                            alt="Farm eggs"
                            className="home-hero__image-float"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=240&h=180&fit=crop"
                            alt="Green farm"
                            className="home-hero__image-float-2"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Strip */}
            <ScrollReveal>
                <div className="home-gallery">
                    {GALLERY.map((src, i) => (
                        <img key={i} src={src} alt="Farmosure produce" loading="lazy" />
                    ))}
                </div>
            </ScrollReveal>

            {/* Categories */}
            <section className="home-categories">
                <ScrollReveal>
                    <h2 className="section-title">Explore Our Categories</h2>
                    <p className="section-subtitle">Discover premium quality products sourced directly from trusted farms</p>
                </ScrollReveal>
                <div className="home-categories__grid">
                    {CATEGORIES.map((cat, i) => (
                        <ScrollReveal key={cat.name} delay={i * 80}>
                            <CategoryCard name={cat.name} image={cat.image} />
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Why Farmosure */}
            <section className="home-why">
                <ScrollReveal>
                    <div className="home-why__leaf">
                        <LeafIcon />
                    </div>
                    <h2 className="section-title">Why Choose Farmosure?</h2>
                    <p className="section-subtitle">
                        We're committed to bringing you the finest quality with complete trust and transparency
                    </p>
                </ScrollReveal>
                <div className="home-why__grid">
                    <ScrollReveal delay={0}>
                        <IconFeatureBlock
                            icon={<FarmIcon />}
                            title="Farm Fresh"
                            text="Sourced directly from trusted farms, ensuring peak freshness."
                            linkLabel="Read More"
                            linkTo="/quality"
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <IconFeatureBlock
                            icon={<ColdChainIcon />}
                            title="Cold Chain"
                            text="Stringent quality checks and food safety protocols at every step."
                            linkLabel="Read More"
                            linkTo="/quality"
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <IconFeatureBlock
                            icon={<HygieneIcon />}
                            title="Hygiene Handling"
                            text="Temperature-controlled delivery from farm to your doorstep."
                            linkLabel="Read More"
                            linkTo="/quality"
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <IconFeatureBlock
                            icon={<QualityIcon />}
                            title="Quality Promise"
                            text="Premium cuts, ethical sourcing, and complete transparency."
                            linkLabel="Read More"
                            linkTo="/quality"
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* Quality Promise Strip */}
            <section className="home-promise">
                <ScrollReveal>
                    <h2 className="section-title">Our Commitment to You</h2>
                    <p className="section-subtitle">Every step of our process is designed around your health and safety</p>
                </ScrollReveal>
                <div className="home-promise__grid">
                    <ScrollReveal delay={0}>
                        <div className="home-promise__item">
                            <div className="home-promise__icon"><ShieldIcon /></div>
                            <div className="home-promise__label">100% Safe</div>
                            <p className="home-promise__desc">Every product passes rigorous safety checks before reaching you</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <div className="home-promise__item">
                            <div className="home-promise__icon"><TruckIcon /></div>
                            <div className="home-promise__label">Express Delivery</div>
                            <p className="home-promise__desc">Same-day delivery to keep your proteins at peak freshness</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="home-promise__item">
                            <div className="home-promise__icon"><LeafIcon /></div>
                            <div className="home-promise__label">Ethically Sourced</div>
                            <p className="home-promise__desc">No antibiotics, no hormones — just pure, natural goodness</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <div className="home-promise__item">
                            <div className="home-promise__icon"><FarmIcon /></div>
                            <div className="home-promise__label">Farm Verified</div>
                            <p className="home-promise__desc">Every source farm is audited and certified for quality</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="home-cta-banner">
                <ScrollReveal>
                    <h2 className="home-cta-banner__title">Ready to Experience True Freshness?</h2>
                    <p className="home-cta-banner__text">
                        Join thousands of families who trust Farmosure for their daily protein needs
                    </p>
                    <CTAButton label="Browse All Products" to="/products" variant="white" />
                </ScrollReveal>
            </section>
        </div>
    );
}
