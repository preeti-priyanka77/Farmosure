import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const STEPS = [
    {
        title: 'Ethical Farm Sourcing',
        points: [
            'Direct partnerships with certified farms',
            'Animals raised in open, stress-free environments',
            'No antibiotics or growth hormones',
            'Regular farm audits for compliance',
            'Sustainable and humane farming practices',
        ],
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
    },
    {
        title: 'Hygienic Processing',
        points: [
            'State-of-the-art processing facilities',
            'Trained staff in food safety protocols',
            'Stainless steel, sanitized equipment',
            'Strict quality checks at every stage',
            'Zero-contamination processing environment',
        ],
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=600&h=400&fit=crop',
    },
    {
        title: 'Cold-Chain Delivery',
        points: [
            'Temperature-controlled storage at all times',
            'Insulated packaging for last-mile delivery',
            'Real-time temperature monitoring',
            'Same-day delivery to major cities',
            'Preserving freshness from farm to fork',
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    },
    {
        title: 'Safe Packaging',
        points: [
            'Vacuum-sealed leak-proof packaging',
            'Food-grade materials only',
            'Eco-friendly and recyclable packs',
            'Clear labeling with source information',
            'Tamper-evident seals for safety',
        ],
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop',
    },
];

const CERTS = [
    {
        title: 'FSSAI Licensed',
        desc: 'Our facilities meet Food Safety Standards Authority of India requirements.',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: 'Lab Tested',
        desc: 'Every batch undergoes microbiological and quality testing.',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3v7.188l-4.758 8.218A1.5 1.5 0 005.538 21h12.924a1.5 1.5 0 001.296-2.244L15 10.188V3" />
                <path d="M9 3h6" />
            </svg>
        ),
    },
    {
        title: 'ISO 22000 Certified',
        desc: 'International food safety management system compliance.',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Trained Staff',
        desc: 'All team members certified in food safety and hygiene protocols.',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

export default function About() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero__bg" />
                <div className="about-hero__overlay" />
                <div className="about-hero__content">
                    <h1>Our Story</h1>
                    <p>From farm to your fork — a journey built on trust, hygiene, and transparency.</p>
                </div>
            </section>

            {/* Story Intro */}
            <section className="about-story">
                <ScrollReveal>
                    <div className="about-story__intro container">
                        <div className="about-story__intro-label">01 — About Us</div>
                        <h2>
                            Farmosure is committed to making premium, farm-fresh produce{' '}
                            <span className="text-muted-span">
                                sustainable and accessible. By sourcing from trusted farms and following the highest hygiene standards, we ensure every product meets the care your family deserves.
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Zigzag Steps */}
                {STEPS.map((step, i) => (
                    <div key={i} className={`about-step ${i % 2 !== 0 ? 'about-step--reverse' : ''}`}>
                        <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                            <div>
                                <div className="about-step__badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="about-step__title">Step {i + 1}: {step.title}</h3>
                                <ul className="about-step__list">
                                    {step.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'}>
                            <div className="about-step__image">
                                <img src={step.image} alt={step.title} loading="lazy" />
                            </div>
                        </ScrollReveal>
                    </div>
                ))}
            </section>

            {/* Certifications */}
            <section className="about-certs">
                <ScrollReveal>
                    <h2 className="section-title">Our Certifications</h2>
                    <p className="section-subtitle">We hold all necessary certifications to ensure food safety and quality</p>
                </ScrollReveal>
                <div className="about-certs__grid">
                    {CERTS.map((cert, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="about-cert">
                                <div className="about-cert__icon">{cert.icon}</div>
                                <div className="about-cert__title">{cert.title}</div>
                                <p className="about-cert__desc">{cert.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
