import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard({ name, image, to = '/products', variant = '' }) {
    return (
        <Link to={to} className={`category-card ${variant ? `category-card--${variant}` : ''}`}>
            <div className="category-card__image-wrapper">
                <img src={image} alt={name} className="category-card__image" loading="lazy" />
            </div>

            <div className="category-card__content">
                <div className="category-card__name">{name}</div>
            </div>
        </Link>
    );
}
