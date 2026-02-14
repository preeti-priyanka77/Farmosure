import ScrollReveal from '../components/ScrollReveal';
import './Quality.css';

const STEPS = [
    {
        title: 'Ethical Farm Sourcing',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
        ),
        points: [
            'Direct partnerships with certified farms across India',
            'Animals raised in open, stress-free environments',
            'No antibiotics or artificial growth hormones used',
            'Regular farm audits for compliance and animal welfare',
            'Sustainable and humane farming practices verified',
        ],
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
    },
    {
        title: 'Hygienic Processing',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        points: [
            'State-of-the-art FSSAI-certified processing facilities',
            'Trained staff with food safety certifications',
            'Stainless steel, sanitized equipment throughout',
            'Multi-step quality checks at every processing stage',
            'Zero-contamination cold-room processing environment',
        ],
        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=600&h=400&fit=crop',
    },
    {
        title: 'Cold-Chain Handling',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5M2 12h20" />
            </svg>
        ),
        points: [
            'Temperature-controlled storage from processing to dispatch',
            'Insulated, thermally-regulated delivery packaging',
            'Real-time temperature monitoring across supply chain',
            'Same-day delivery within served metro cities',
            'Cold-chain integrity maintained until doorstep delivery',
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    },
    {
        title: 'Packaging Safety',
        icon: (
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        points: [
            'Vacuum-sealed, leak-proof packaging for every order',
            'Only food-grade, BPA-free materials used',
            'Eco-friendly and fully recyclable packaging options',
            'Clear labeling with source farm and cut information',
            'Tamper-evident seals for complete safety assurance',
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

export default function Quality() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="quality-hero">
                <div className="quality-hero__bg" />
                <div className="quality-hero__overlay" />
                <div className="quality-hero__content">
                    <h1>Quality and Hygiene Standards</h1>
                    <p>Your health and safety are our top priority. Here's how we ensure every product meets the highest standards of quality and hygiene.</p>
                </div>
            </section>

            {/* Steps */}
            <section className="quality-steps">
                {STEPS.map((step, i) => (
                    <div key={i} className={`quality-step ${i % 2 !== 0 ? 'quality-step--reverse' : ''}`}>
                        <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                            <div>
                                <div className="quality-step__badge">{step.icon}</div>
                                <h3 className="quality-step__title">Step {i + 1}: {step.title}</h3>
                                <ul className="quality-step__list">
                                    {step.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'}>
                            <div className="quality-step__image">
                                <img src={step.image} alt={step.title} loading="lazy" />
                            </div>
                        </ScrollReveal>
                    </div>
                ))}
            </section>

            {/* Certifications */}
            <section className="quality-certs">
                <ScrollReveal>
                    <h2 className="section-title">Our Certifications</h2>
                    <p className="section-subtitle">We hold all necessary certifications to ensure food safety and quality</p>
                </ScrollReveal>
                <div className="quality-certs__grid">
                    {CERTS.map((cert, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="quality-cert">
                                <div className="quality-cert__icon">{cert.icon}</div>
                                <div className="quality-cert__title">{cert.title}</div>
                                <p className="quality-cert__desc">{cert.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
