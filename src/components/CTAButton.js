import { Link } from 'react-router-dom';
import './CTAButton.css';

export default function CTAButton({ label, to, onClick, variant = '', arrow = true }) {
    const cls = `cta-button ${variant ? `cta-button--${variant}` : ''}`;

    if (to) {
        return (
            <Link to={to} className={cls}>
                {label}
                {arrow && <span className="cta-arrow">→</span>}
            </Link>
        );
    }

    return (
        <button className={cls} onClick={onClick}>
            {label}
            {arrow && <span className="cta-arrow">→</span>}
        </button>
    );
}
