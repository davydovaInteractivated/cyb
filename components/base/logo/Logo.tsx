import { PropsWithChildren } from 'react';

/** Styles */
import './logo.scss';

interface ILogoProps {
    className?: string,
    inverted?: boolean,
};

const Logo = ({
    className = '',
    inverted = true,
    children,
}: PropsWithChildren<ILogoProps>) => {
    return (
        <div className={`logo ${className} logo--${inverted ? 'inverted' : ''} bold`}>KYB <sub className="thin">{children}</sub></div>
    );
};

export default Logo;
