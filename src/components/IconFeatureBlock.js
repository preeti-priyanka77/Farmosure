import { Link } from 'react-router-dom';
import './IconFeatureBlock.css';

export default function IconFeatureBlock({ icon, title, text, linkLabel, linkTo }) {
    return (
        <div className="icon-feature">
            <div className="icon-feature__icon">{icon}</div>
            <div className="icon-feature__title">{title}</div>
            <p className="icon-feature__text">{text}</p>
            {linkLabel && linkTo && (
                <Link to={linkTo} className="icon-feature__link">
                    {linkLabel} <span>→</span>
                </Link>
            )}
        </div>
    );
}
