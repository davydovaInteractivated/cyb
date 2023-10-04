/** Styles */
import './logo.scss';

const Logo = ({
    className = '',
    inverted = true,
    children,
}) => {
    return (
        <div className={`logo ${className} logo--${inverted ? 'inverted' : ''} bold`}>KYB <sub className="thin">{children}</sub></div>
    );
};

export default Logo;
